'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

type Listener = (toasts: ToastItem[]) => void;
let toasts: ToastItem[] = [];
let listeners: Listener[] = [];

function emitChange() {
  for (const listener of listeners) {
    listener([...toasts]);
  }
}

export const toast = {
  success: (message: string) => addToast(message, 'success'),
  error: (message: string) => addToast(message, 'error'),
  info: (message: string) => addToast(message, 'info'),
  custom: (message: string, type: ToastType = 'info') => addToast(message, type),
};

function addToast(message: string, type: ToastType) {
  const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  const item: ToastItem = { id, message, type };
  toasts = [...toasts, item];
  emitChange();

  setTimeout(() => {
    removeToast(id);
  }, 4000);
}

function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  emitChange();
}

export function Toaster() {
  const [activeToasts, setActiveToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const listener: Listener = (newToasts) => {
      setActiveToasts(newToasts);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {activeToasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`pointer-events-auto rounded-2xl p-4 shadow-2xl backdrop-blur-xl border flex items-start gap-3 text-xs sm:text-sm font-medium ${
              t.type === 'success'
                ? 'bg-gradient-to-r from-[#2C1810] to-[#1A0E0A] border-emerald-500/60 text-white shadow-[0_10px_30px_rgba(16,185,129,0.2)]'
                : t.type === 'error'
                ? 'bg-gradient-to-r from-[#3D000E] to-[#1A0E0A] border-red-500/60 text-white shadow-[0_10px_30px_rgba(239,68,68,0.25)]'
                : 'bg-gradient-to-r from-[#2C1810] to-[#1A0E0A] border-[#D4AF37]/60 text-[#F4E4BC] shadow-[0_10px_30px_rgba(212,175,55,0.2)]'
            }`}
          >
            {t.type === 'success' ? (
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            ) : t.type === 'error' ? (
              <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
            ) : (
              <Info size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
            )}

            <div className="flex-1 min-w-0 pr-1 leading-snug">
              <span>{t.message}</span>
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="text-white/40 hover:text-white transition-colors p-0.5 -mr-1 -mt-1 rounded-md"
              aria-label="Close notification"
            >
              <X size={15} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
