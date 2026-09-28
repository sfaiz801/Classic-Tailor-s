'use client';

import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWAInstall } from '@/hooks/usePWAInstall';

export default function InstallAppBanner() {
  const { isInstalled, isIOS, canInstall, showGuideModal, setShowGuideModal, triggerInstall } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed || isInstalled || !canInstall) return null;

  return (
    <>
      {/* Floating Bottom Install Pill Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:right-auto sm:left-6 z-40 max-w-md pointer-events-auto"
      >
        <div className="relative rounded-2xl bg-gradient-to-r from-[#2C1810] via-[#381B12] to-[#2C1810] border-2 border-[#D4AF37] p-3 sm:p-4 text-white shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-xl flex items-center justify-between gap-3">
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* App Icon */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#800020] via-[#5C0015] to-[#2C1810] border border-[#D4AF37]/60 flex items-center justify-center font-serif font-black text-sm text-[#F4E4BC] shadow-lg shrink-0">
            CT
          </div>

          {/* Content Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                Official Android APK
              </span>
              <span className="text-[10px] text-[#D4AF37] font-semibold">1-Tap Install</span>
            </div>
            <h4 className="font-serif text-xs sm:text-sm font-bold text-white truncate mt-0.5">
              Classic Tailor&apos;s App
            </h4>
            <p className="text-[11px] text-[#E8DCC8]/80 truncate">
              Direct phone screen par install karein
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerInstall}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] text-[#2C1810] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <Download size={14} className="stroke-[2.5]" />
              <span>Install APK</span>
            </motion.button>

            <button
              onClick={() => setIsDismissed(true)}
              className="text-white/50 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Luxury Install Guidance Modal (Triggered when browser requires manual menu tap) */}
      <AnimatePresence>
        {showGuideModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-4 sm:p-6"
            onClick={() => setShowGuideModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#2C1810] via-[#23120C] to-[#1A0E0A] border-2 border-[#D4AF37] p-6 text-white shadow-2xl text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGuideModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X size={18} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#800020] to-[#5C0015] border border-[#D4AF37]/50 flex items-center justify-center mx-auto mb-4 text-[#D4AF37] shadow-xl">
                <Smartphone size={26} />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#F4E4BC] mb-1">
                {isIOS ? 'iPhone / iPad Par Install Karein' : 'Direct Home Screen Par Layein'}
              </h3>
              <p className="text-xs text-[#E8DCC8]/70 mb-5">
                {isIOS
                  ? 'Safari browser ke zariye 1-click me home screen par icon lagayein:'
                  : 'Aapke browser me APK direct install karne ke 2 aasan steps:'}
              </p>

              {isIOS ? (
                <div className="space-y-3 text-left bg-black/40 p-4 rounded-2xl border border-white/10 text-xs text-[#E8DCC8] mb-5">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#2C1810] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <p>Safari me neeche <strong>Share (⎋)</strong> icon dabayein.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#2C1810] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <p>Neeche scroll karke <strong>&apos;Add to Home Screen&apos; (+)</strong> chunein.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-left bg-black/40 p-4 rounded-2xl border border-white/10 text-xs text-[#E8DCC8] mb-5">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#2C1810] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <p>Browser ke top-right me <strong>3-Dots (⋮) Menu</strong> par click karein.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#2C1810] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <p><strong>&apos;Install App&apos;</strong> ya <strong>&apos;Add to Home Screen&apos;</strong> select karein.</p>
                  </div>
                  <div className="flex items-start gap-2.5 text-emerald-400">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <p>App turant aapke phone screen par icon ban kar aa jayegi!</p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowGuideModal(false)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] text-[#2C1810] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 transition-transform cursor-pointer"
              >
                Samajh Gaya (Done)
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
