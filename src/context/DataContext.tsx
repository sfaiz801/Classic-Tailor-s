'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service, services as defaultServices } from '@/data/services';
import { GalleryItem, galleryItems as defaultGallery } from '@/data/gallery';
import { shopInfo as defaultShop } from '@/data/shop';

interface DataContextType {
  services: Service[];
  galleryItems: GalleryItem[];
  shopInfo: typeof defaultShop;
  inquiries: any[];
  isLoading: boolean;
  updateServices: (newServices: Service[]) => Promise<boolean>;
  updateServiceItem: (updated: Service) => Promise<boolean>;
  updateGallery: (newGallery: GalleryItem[]) => Promise<boolean>;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => Promise<boolean>;
  deleteGalleryItem: (id: number) => Promise<boolean>;
  updateShopInfo: (newShop: typeof defaultShop) => Promise<boolean>;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY = 'classic_tailor_live_content_v1';

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(defaultGallery);
  const [shopInfo, setShopInfo] = useState<typeof defaultShop>(defaultShop);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load live data from API or localStorage
  const loadData = async () => {
    try {
      // Check localStorage first for instant render
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (parsed.services) setServices(parsed.services);
          if (parsed.gallery) setGalleryItems(parsed.gallery);
          if (parsed.shop) setShopInfo(parsed.shop);
          if (parsed.inquiries) setInquiries(parsed.inquiries);
        } catch (e) {}
      }

      // Fetch fresh from server
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const data = await res.json();
        if (data.services) setServices(data.services);
        if (data.gallery) setGalleryItems(data.gallery);
        if (data.shop) setShopInfo(data.shop);
        if (data.inquiries) setInquiries(data.inquiries);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.log('Using default data or offline mode');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Listen to changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed.services) setServices(parsed.services);
          if (parsed.gallery) setGalleryItems(parsed.gallery);
          if (parsed.shop) setShopInfo(parsed.shop);
        } catch (err) {}
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const saveLive = async (payload: {
    services?: Service[];
    gallery?: GalleryItem[];
    shop?: typeof defaultShop;
  }): Promise<boolean> => {
    const updatedServices = payload.services || services;
    const updatedGallery = payload.gallery || galleryItems;
    const updatedShop = payload.shop || shopInfo;

    const fullPayload = {
      services: updatedServices,
      gallery: updatedGallery,
      shop: updatedShop,
      inquiries
    };

    // Optimistic UI update
    if (payload.services) setServices(payload.services);
    if (payload.gallery) setGalleryItems(payload.gallery);
    if (payload.shop) setShopInfo(payload.shop);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(fullPayload));

    try {
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (e) {
      console.error('Failed to save to server:', e);
      return false;
    }
  };

  const updateServices = async (newServices: Service[]) => {
    return saveLive({ services: newServices });
  };

  const updateServiceItem = async (updated: Service) => {
    const updatedList = services.map((s) => (s.id === updated.id ? updated : s));
    return saveLive({ services: updatedList });
  };

  const updateGallery = async (newGallery: GalleryItem[]) => {
    return saveLive({ gallery: newGallery });
  };

  const addGalleryItem = async (item: Omit<GalleryItem, 'id'>) => {
    const newId = galleryItems.length > 0 ? Math.max(...galleryItems.map((g) => g.id)) + 1 : 1;
    const newItem: GalleryItem = { ...item, id: newId };
    const updated = [newItem, ...galleryItems];
    return saveLive({ gallery: updated });
  };

  const deleteGalleryItem = async (id: number) => {
    const updated = galleryItems.filter((g) => g.id !== id);
    return saveLive({ gallery: updated });
  };

  const updateShopInfo = async (newShop: typeof defaultShop) => {
    return saveLive({ shop: newShop });
  };

  return (
    <DataContext.Provider
      value={{
        services,
        galleryItems,
        shopInfo,
        inquiries,
        isLoading,
        updateServices,
        updateServiceItem,
        updateGallery,
        addGalleryItem,
        deleteGalleryItem,
        updateShopInfo,
        refreshData: loadData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useSiteData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a DataProvider');
  }
  return context;
}
