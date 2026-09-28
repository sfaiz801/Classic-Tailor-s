'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Service, GalleryItem, ShopInfo, Inquiry } from '@/types';
import { services as defaultServices } from '@/data/services';
import { galleryItems as defaultGallery } from '@/data/gallery';
import { shopInfo as defaultShop } from '@/data/shop';

interface DataContextType {
  services: Service[];
  galleryItems: GalleryItem[];
  shopInfo: ShopInfo;
  inquiries: Inquiry[];
  isLoading: boolean;
  updateServices: (newServices: Service[]) => Promise<boolean>;
  updateServiceItem: (updated: Service) => Promise<boolean>;
  updateGallery: (newGallery: GalleryItem[]) => Promise<boolean>;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => Promise<boolean>;
  deleteGalleryItem: (id: number) => Promise<boolean>;
  updateShopInfo: (newShop: ShopInfo) => Promise<boolean>;
  addInquiry: (inquiry: { name: string; phone: string; service: string; notes?: string }) => Promise<boolean>;
  updateInquiryStatus: (id: string, status: 'New' | 'Contacted' | 'Completed') => Promise<boolean>;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY = 'classic_tailor_live_content_v1';

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(defaultGallery);
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShop as unknown as ShopInfo);
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: "inq-1",
      name: "Rahul Verma",
      phone: "+91 9876543210",
      service: "Coat-Pant Suit",
      date: "2026-09-25",
      status: "Contacted",
      notes: "Raymond pure wool fabric request for brother's wedding"
    },
    {
      id: "inq-2",
      name: "Amit Kumar",
      phone: "+91 9812345678",
      service: "Royal Sherwani",
      date: "2026-09-27",
      status: "New",
      notes: "Groom sherwani fitting needed by next month"
    }
  ]);
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
          if (parsed.inquiries) setInquiries(parsed.inquiries);
        } catch (err) {}
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const saveLive = async (payload: {
    services?: Service[];
    gallery?: GalleryItem[];
    shop?: ShopInfo;
    inquiries?: Inquiry[];
  }): Promise<boolean> => {
    const updatedServices = payload.services || services;
    const updatedGallery = payload.gallery || galleryItems;
    const updatedShop = payload.shop || shopInfo;
    const updatedInquiries = payload.inquiries || inquiries;

    const fullPayload = {
      services: updatedServices,
      gallery: updatedGallery,
      shop: updatedShop,
      inquiries: updatedInquiries
    };

    // Optimistic UI update
    if (payload.services) setServices(payload.services);
    if (payload.gallery) setGalleryItems(payload.gallery);
    if (payload.shop) setShopInfo(payload.shop);
    if (payload.inquiries) setInquiries(payload.inquiries);

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

  const updateShopInfo = async (newShop: ShopInfo) => {
    return saveLive({ shop: newShop });
  };

  const addInquiry = async (inq: { name: string; phone: string; service: string; notes?: string }) => {
    const newInq: Inquiry = {
      ...inq,
      id: `inq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    const updated = [newInq, ...inquiries];
    return saveLive({ inquiries: updated });
  };

  const updateInquiryStatus = async (id: string, status: 'New' | 'Contacted' | 'Completed') => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    return saveLive({ inquiries: updated });
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
        addInquiry,
        updateInquiryStatus,
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
