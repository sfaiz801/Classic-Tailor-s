"use client";

import { useEffect, useState } from "react";
import { Download, Smartphone, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallAppBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSTip, setShowIOSTip] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSTip(true);
    } else {
      alert("App install karne ke liye browser ke 3-dots Menu par click karein aur 'Add to Home Screen' ya 'Install App' chunein!");
    }
  };

  if (isDismissed || isInstalled) return null;

  return (
    <>
      <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:right-auto sm:left-24 z-40 max-w-sm animate-fade-in">
        <div className="bg-[#2C1810]/95 backdrop-blur-md border border-[#D4AF37] rounded-2xl p-3 sm:p-4 text-white shadow-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gold-gradient-bg text-[#2C1810] font-serif font-black text-sm flex items-center justify-center shrink-0 shadow-md">
            CT
          </div>

          <div className="flex-1 min-w-0">
            <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Android App
            </span>
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#F4E4BC] truncate">
              Classic Tailor&apos;s App
            </h4>
            <p className="text-[11px] text-white/70 truncate">
              Phone par install karein (1-Tap)
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="gold-gradient-bg text-[#2C1810] font-bold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <Download size={13} />
              <span>Install</span>
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Instruction Modal */}
      {showIOSTip && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowIOSTip(false)}
        >
          <div
            className="bg-[#2C1810] border-2 border-[#D4AF37] rounded-3xl p-6 max-w-sm w-full text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <Smartphone size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F4E4BC] mb-2">
              iPhone / iPad Install Guide
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              1. Safari me neeche <strong>Share (⎋)</strong> icon dabayein.<br />
              2. Scroll karke <strong>&apos;Add to Home Screen&apos; (+)</strong> select karein.
            </p>
            <button
              onClick={() => setShowIOSTip(false)}
              className="gold-gradient-bg text-[#2C1810] font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-md"
            >
              Samajh Gaya (Done)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
