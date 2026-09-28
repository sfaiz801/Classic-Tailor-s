'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Image as ImageIcon,
  Scissors,
  Tag,
  Phone,
  MessageSquare,
  LogOut,
  ExternalLink,
  Save,
  Plus,
  Trash2,
  Upload,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Eye,
  RefreshCw,
  Sparkles,
  Crown
} from 'lucide-react';
import { toast } from '@/components/ui/Toast';
import { useSiteData } from '@/context/DataContext';
import { categories as defaultCategories } from '@/data/gallery';

export default function AdminDashboardPage() {
  const router = useRouter();
  const {
    services,
    galleryItems,
    shopInfo,
    inquiries,
    updateServices,
    updateGallery,
    addGalleryItem,
    deleteGalleryItem,
    updateShopInfo,
    updateInquiryStatus,
    refreshData
  } = useSiteData();

  const [activeTab, setActiveTab] = useState<'gallery' | 'services' | 'offers' | 'shop' | 'inquiries'>('gallery');
  const [authChecking, setAuthChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // New gallery item form state
  const [showAddGalleryModal, setShowAddGalleryModal] = useState(false);
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryHindiTitle, setNewGalleryHindiTitle] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState('Suits');
  const [newGalleryDescription, setNewGalleryDescription] = useState('');
  const [newGalleryImage, setNewGalleryImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Shop info form state
  const [shopForm, setShopForm] = useState(shopInfo);

  // Services state
  const [editableServices, setEditableServices] = useState(services);

  useEffect(() => {
    setShopForm(shopInfo);
  }, [shopInfo]);

  useEffect(() => {
    setEditableServices(services);
  }, [services]);

  // Check auth
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/admin/check-auth');
        const data = await res.json();
        if (!data.authenticated) {
          window.location.href = '/admin/login';
          return;
        }
        setCurrentUser(data.user);
      } catch (err) {
        window.location.href = '/admin/login';
      } finally {
        setAuthChecking(false);
      }
    };
    checkAuth();
  }, [router]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      toast.info('Logged out successfully');
      setTimeout(() => {
        window.location.href = '/admin/login';
      }, 500);
    } catch (e) {
      window.location.href = '/admin/login';
    }
  };

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');

      setNewGalleryImage(data.url);
      showNotification('Image uploaded and optimized to WebP successfully!');
    } catch (err: any) {
      showNotification(err.message || 'Failed to upload image', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  // Save new gallery item
  const handleCreateGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryImage) {
      showNotification('Please select or upload an image first', 'error');
      return;
    }

    const success = await addGalleryItem({
      title: newGalleryTitle,
      hindiTitle: newGalleryHindiTitle,
      category: newGalleryCategory,
      image: newGalleryImage,
      description: newGalleryDescription
    });

    if (success) {
      showNotification('New garment photo added to gallery successfully!');
      setShowAddGalleryModal(false);
      setNewGalleryTitle('');
      setNewGalleryHindiTitle('');
      setNewGalleryDescription('');
      setNewGalleryImage('');
    } else {
      showNotification('Failed to save to server', 'error');
    }
  };

  // Save edited services
  const handleSaveServices = async () => {
    const ok = await updateServices(editableServices);
    if (ok) {
      showNotification('All service descriptions & prices updated on live website!');
    } else {
      showNotification('Failed to update services', 'error');
    }
  };

  // Save shop information
  const handleSaveShopInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await updateShopInfo(shopForm);
    if (ok) {
      showNotification('Shop contact, timings & offers updated live!');
    } else {
      showNotification('Failed to update shop info', 'error');
    }
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#1A0E0A] flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm font-serif text-[#F4E4BC]">Verifying Super Admin Authorization...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0E0A] text-white selection:bg-[#D4AF37] selection:text-[#2C1810]">
      {/* Top Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#2C1810]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#800020] to-[#5C0015] border border-[#D4AF37]/40 flex items-center justify-center font-serif font-black text-lg text-[#D4AF37] shadow-md">
              CT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-lg text-white">Classic Tailor&apos;s</h1>
                <span className="px-2 py-0.5 rounded-full bg-[#800020] text-[10px] font-bold text-[#F4E4BC] border border-[#D4AF37]/30 uppercase tracking-wider flex items-center gap-1">
                  <Crown size={10} className="text-[#D4AF37]" />
                  Super Admin
                </span>
              </div>
              <p className="text-xs text-[#E8DCC8]/70 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Logged in: {currentUser?.email || 'classictailors.mir@gmail.com'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all border border-white/10"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">View Live Website</span>
            </a>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-xs font-semibold text-red-200 border border-red-500/30 transition-all cursor-pointer"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-[#2C1810] to-[#20110B] border border-[#D4AF37]/30 shadow-lg"
          >
            <div className="flex items-center justify-between text-[#D4AF37] mb-2">
              <span className="text-xs uppercase tracking-wider font-bold">Gallery Photos</span>
              <ImageIcon size={18} />
            </div>
            <p className="text-3xl font-serif font-bold text-white">{galleryItems.length}</p>
            <p className="text-[11px] text-[#E8DCC8]/60 mt-1">Live customer preview</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-[#2C1810] to-[#20110B] border border-[#D4AF37]/30 shadow-lg"
          >
            <div className="flex items-center justify-between text-[#D4AF37] mb-2">
              <span className="text-xs uppercase tracking-wider font-bold">Services</span>
              <Scissors size={18} />
            </div>
            <p className="text-3xl font-serif font-bold text-white">{services.length}</p>
            <p className="text-[11px] text-[#E8DCC8]/60 mt-1">Suits, Sherwani & more</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-[#2C1810] to-[#20110B] border border-[#D4AF37]/30 shadow-lg"
          >
            <div className="flex items-center justify-between text-[#D4AF37] mb-2">
              <span className="text-xs uppercase tracking-wider font-bold">Active Offer</span>
              <Tag size={18} />
            </div>
            <p className="text-xl font-serif font-bold text-white truncate">{shopInfo.offer.discount}</p>
            <p className="text-[11px] text-emerald-400 mt-1">Instagram Discount Active</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-[#2C1810] to-[#20110B] border border-[#D4AF37]/30 shadow-lg"
          >
            <div className="flex items-center justify-between text-[#D4AF37] mb-2">
              <span className="text-xs uppercase tracking-wider font-bold">Inquiries</span>
              <MessageSquare size={18} />
            </div>
            <p className="text-3xl font-serif font-bold text-white">{inquiries.length}</p>
            <p className="text-[11px] text-[#E8DCC8]/60 mt-1">Appointment requests</p>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#23120C] border border-[#D4AF37]/20 mb-8">
          {[
            { id: 'gallery', label: '📸 Gallery Manager', icon: ImageIcon },
            { id: 'services', label: '✂️ Services & Pricing', icon: Scissors },
            { id: 'offers', label: '🏷️ Offers & Discounts', icon: Tag },
            { id: 'shop', label: '📞 Shop Contacts & Hours', icon: Phone },
            { id: 'inquiries', label: '📋 Customer Bookings', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#800020] to-[#5C0015] text-[#F4E4BC] border border-[#D4AF37]/50 shadow-md'
                  : 'text-[#E8DCC8]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: GALLERY MANAGER */}
        {activeTab === 'gallery' && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#2C1810]/70 border border-[#D4AF37]/30">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#F4E4BC]">
                  Gallery Garment Showcase ({galleryItems.length})
                </h2>
                <p className="text-xs text-[#E8DCC8]/70 mt-1">
                  Upload new photos of bespoke suits, sherwanis, or bandis directly from your phone.
                </p>
              </div>
              <button
                onClick={() => setShowAddGalleryModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#2C1810] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer shrink-0"
              >
                <Plus size={16} />
                <span>Add New Photo</span>
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-[#23120C] border border-[#D4AF37]/25 shadow-lg group flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                      {item.hindiTitle && (
                        <p className="text-xs font-semibold text-[#D4AF37]">{item.hindiTitle}</p>
                      )}
                      <p className="text-xs text-[#E8DCC8]/70 mt-2 line-clamp-2">{item.description}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-white/40">ID: #{item.id}</span>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
                            deleteGalleryItem(item.id);
                            showNotification('Garment deleted from gallery');
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-200 text-xs font-medium border border-red-500/30 transition-colors cursor-pointer"
                      >
                        <Trash2 size={13} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: SERVICES & PRICING */}
        {activeTab === 'services' && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#2C1810]/70 border border-[#D4AF37]/30">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#F4E4BC]">
                  Services & Pricing Control
                </h2>
                <p className="text-xs text-[#E8DCC8]/70 mt-1">
                  Change service rates, descriptions, Hindi titles, and bullet points.
                </p>
              </div>
              <button
                onClick={handleSaveServices}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer shrink-0"
              >
                <Save size={16} />
                <span>Save All Service Changes</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {editableServices.map((service, index) => (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-[#23120C] border border-[#D4AF37]/25 shadow-lg space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      Service #{service.id}
                    </span>
                    <input
                      type="text"
                      value={service.price}
                      onChange={(e) => {
                        const copy = [...editableServices];
                        copy[index].price = e.target.value;
                        setEditableServices(copy);
                      }}
                      className="px-3 py-1 bg-black/40 border border-[#D4AF37]/40 rounded-full text-xs font-bold text-[#F4E4BC] text-right outline-none focus:border-[#D4AF37]"
                      placeholder="e.g. Custom Quote or ₹4,500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-white/60 block mb-1">
                        English Title
                      </label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const copy = [...editableServices];
                          copy[index].title = e.target.value;
                          setEditableServices(copy);
                        }}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-white outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-white/60 block mb-1">
                        Hindi Title
                      </label>
                      <input
                        type="text"
                        value={service.hindiTitle || ''}
                        onChange={(e) => {
                          const copy = [...editableServices];
                          copy[index].hindiTitle = e.target.value;
                          setEditableServices(copy);
                        }}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-[#D4AF37] outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-white/60 block mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={service.description}
                      onChange={(e) => {
                        const copy = [...editableServices];
                        copy[index].description = e.target.value;
                        setEditableServices(copy);
                      }}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white/80 outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-white/60 block mb-1">
                      Image Path
                    </label>
                    <input
                      type="text"
                      value={service.image || ''}
                      onChange={(e) => {
                        const copy = [...editableServices];
                        copy[index].image = e.target.value;
                        setEditableServices(copy);
                      }}
                      className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white/60 font-mono outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: OFFERS & DISCOUNTS */}
        {activeTab === 'offers' && (
          <section className="space-y-6">
            <div className="p-8 rounded-3xl bg-[#2C1810]/70 border border-[#D4AF37]/30 max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-[#F4E4BC] mb-2">
                Instagram & Festive Discount Offer
              </h2>
              <p className="text-xs text-[#E8DCC8]/70 mb-6">
                Update the promotional offer shown in the banner and dedicated Instagram section on the home page.
              </p>

              <form onSubmit={handleSaveShopInfo} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      Discount Badge / Amount
                    </label>
                    <input
                      type="text"
                      value={shopForm.offer.discount}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          offer: { ...shopForm.offer, discount: e.target.value }
                        })
                      }
                      placeholder="e.g. ₹100 OFF or 15% OFF"
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={shopForm.offer.badge}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          offer: { ...shopForm.offer, badge: e.target.value }
                        })
                      }
                      placeholder="Special Offer"
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                    Offer Headline (Hindi / English)
                  </label>
                  <input
                    type="text"
                    value={shopForm.offer.title}
                    onChange={(e) =>
                      setShopForm({
                        ...shopForm,
                        offer: { ...shopForm.offer, title: e.target.value }
                      })
                    }
                    placeholder="Instagram पर Follow करें और पाएँ ₹100 OFF"
                    className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                    Offer Subtitle
                  </label>
                  <input
                    type="text"
                    value={shopForm.offer.subtitle}
                    onChange={(e) =>
                      setShopForm({
                        ...shopForm,
                        offer: { ...shopForm.offer, subtitle: e.target.value }
                      })
                    }
                    placeholder="पहली सिलाई पर"
                    className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                    Condition / Rules
                  </label>
                  <input
                    type="text"
                    value={shopForm.offer.condition}
                    onChange={(e) =>
                      setShopForm({
                        ...shopForm,
                        offer: { ...shopForm.offer, condition: e.target.value }
                      })
                    }
                    placeholder="Follow करने के बाद Instagram पर हमें दिखाएँ और छूट पाएँ"
                    className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#2C1810] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    Save Offer Details
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* TAB 4: SHOP CONTACTS & DETAILS */}
        {activeTab === 'shop' && (
          <section className="space-y-6">
            <div className="p-8 rounded-3xl bg-[#2C1810]/70 border border-[#D4AF37]/30 max-w-3xl">
              <h2 className="font-serif text-2xl font-bold text-[#F4E4BC] mb-2">
                Shop Contacts, Hours & Master Profile
              </h2>
              <p className="text-xs text-[#E8DCC8]/70 mb-6">
                Update customer contact numbers, WhatsApp, opening timings, and address.
              </p>

              <form onSubmit={handleSaveShopInfo} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      Primary Calling Phone
                    </label>
                    <input
                      type="text"
                      value={shopForm.contact.phone}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          contact: { ...shopForm.contact, phone: e.target.value }
                        })
                      }
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      value={shopForm.contact.whatsapp}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          contact: { ...shopForm.contact, whatsapp: e.target.value }
                        })
                      }
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      Alternate Phone
                    </label>
                    <input
                      type="text"
                      value={shopForm.contact.altPhone}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          contact: { ...shopForm.contact, altPhone: e.target.value }
                        })
                      }
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                      Official Email
                    </label>
                    <input
                      type="email"
                      value={shopForm.contact.email}
                      onChange={(e) =>
                        setShopForm({
                          ...shopForm,
                          contact: { ...shopForm.contact, email: e.target.value }
                        })
                      }
                      className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                    Shop Opening Hours
                  </label>
                  <input
                    type="text"
                    value={shopForm.hours.display}
                    onChange={(e) =>
                      setShopForm({
                        ...shopForm,
                        hours: { ...shopForm.hours, display: e.target.value }
                      })
                    }
                    placeholder="10:00 AM – 9:00 PM"
                    className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-1.5">
                    Shop Full Address
                  </label>
                  <textarea
                    rows={2}
                    value={shopForm.address.full}
                    onChange={(e) =>
                      setShopForm({
                        ...shopForm,
                        address: { ...shopForm.address, full: e.target.value }
                      })
                    }
                    className="w-full px-4 py-3 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white text-sm outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#2C1810] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    Save Shop Contacts & Hours
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* TAB 5: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <section className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#2C1810]/70 border border-[#D4AF37]/30">
              <h2 className="font-serif text-xl font-bold text-[#F4E4BC] mb-1">
                Customer Appointments & Inquiries ({inquiries.length})
              </h2>
              <p className="text-xs text-[#E8DCC8]/70">
                Customers who have submitted tailoring requests or requested measurement callbacks.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#23120C] border border-[#D4AF37]/25 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-black/40 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      <th className="p-4">Customer Name</th>
                      <th className="p-4">Phone Number</th>
                      <th className="p-4">Requested Service</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Notes</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-[#E8DCC8]">
                    {inquiries.map((inq: any) => (
                      <tr key={inq.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-semibold text-white">{inq.name}</td>
                        <td className="p-4 font-mono text-[#D4AF37]">{inq.phone}</td>
                        <td className="p-4">{inq.service}</td>
                        <td className="p-4 text-white/50">{inq.date}</td>
                        <td className="p-4">
                          <button
                            onClick={async () => {
                              const nextStatus: 'New' | 'Contacted' | 'Completed' =
                                inq.status === 'New' ? 'Contacted' : inq.status === 'Contacted' ? 'Completed' : 'New';
                              await updateInquiryStatus(inq.id, nextStatus);
                              toast.success(`Inquiry marked as ${nextStatus}`);
                            }}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer hover:scale-105 transition-transform ${
                              inq.status === 'New'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : inq.status === 'Contacted'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                            title="Click to toggle status"
                          >
                            {inq.status} ↻
                          </button>
                        </td>
                        <td className="p-4 text-white/60 max-w-xs truncate">{inq.notes}</td>
                        <td className="p-4 text-right">
                          <a
                            href={`tel:${inq.phone}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-[#2C1810] text-[#F4E4BC] text-xs font-bold transition-colors"
                          >
                            <Phone size={12} />
                            <span>Call</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ADD GALLERY MODAL */}
      <AnimatePresence>
        {showAddGalleryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-[#2C1810] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-2xl relative"
            >
              <h3 className="font-serif text-2xl font-bold text-[#F4E4BC] mb-1">
                Add New Garment Photo
              </h3>
              <p className="text-xs text-[#E8DCC8]/70 mb-6">
                Upload image from mobile/PC. It will be converted into high-speed WebP automatically.
              </p>

              <form onSubmit={handleCreateGalleryItem} className="space-y-4">
                {/* Image Upload Area */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC] block mb-2">
                    Photo Upload
                  </label>
                  <div className="relative border-2 border-dashed border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-2xl p-6 text-center bg-black/30 transition-colors">
                    {newGalleryImage ? (
                      <div className="relative aspect-[4/3] w-full max-w-xs mx-auto rounded-xl overflow-hidden mb-3">
                        <img src={newGalleryImage} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setNewGalleryImage('')}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600 text-white shadow"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload size={28} className="text-[#D4AF37] mb-2" />
                        <p className="text-xs text-white font-medium">Click to select image or drag & drop</p>
                        <p className="text-[11px] text-white/40 mt-1">JPEG, PNG, WebP (Max 8MB)</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  {isUploading && (
                    <p className="text-xs text-[#D4AF37] mt-1.5 flex items-center gap-1.5">
                      <RefreshCw size={12} className="animate-spin" />
                      <span>Optimizing and uploading image...</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-white/70 block mb-1">
                      English Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newGalleryTitle}
                      onChange={(e) => setNewGalleryTitle(e.target.value)}
                      placeholder="e.g. Royal Wedding Sherwani"
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-white outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white/70 block mb-1">
                      Hindi Title
                    </label>
                    <input
                      type="text"
                      value={newGalleryHindiTitle}
                      onChange={(e) => setNewGalleryHindiTitle(e.target.value)}
                      placeholder="e.g. रॉयल शेरवानी"
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/15 rounded-xl text-sm text-[#D4AF37] outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white/70 block mb-1">
                    Garment Category
                  </label>
                  <select
                    value={newGalleryCategory}
                    onChange={(e) => setNewGalleryCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#1A0E0A] border border-white/15 rounded-xl text-sm text-white outline-none focus:border-[#D4AF37]"
                  >
                    {defaultCategories.filter(c => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-white/70 block mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={newGalleryDescription}
                    onChange={(e) => setNewGalleryDescription(e.target.value)}
                    placeholder="Short description of fabric, cut, and occasion..."
                    className="w-full px-3.5 py-2 bg-black/40 border border-white/15 rounded-xl text-xs text-white outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowAddGalleryModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading || !newGalleryImage}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#2C1810] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer"
                  >
                    Publish to Gallery
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
