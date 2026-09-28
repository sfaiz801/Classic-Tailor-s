'use client';

import { useState, useEffect, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

declare global {
  interface Window {
    __deferredPrompt?: BeforeInstallPromptEvent | null;
  }
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  useEffect(() => {
    // Check if already in standalone/installed mode
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://')
    ) {
      setIsInstalled(true);
      return;
    }

    const ua = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isIos);

    // Detect Instagram, Facebook, WhatsApp, or Twitter in-app browser
    const inApp = /fban|fbav|instagram|line|micromessenger|twitter|whatsapp/.test(ua);
    setIsInAppBrowser(inApp);

    // Grab existing prompt if already captured
    if (window.__deferredPrompt) {
      setDeferredPrompt(window.__deferredPrompt);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      window.__deferredPrompt = promptEvent;
      setDeferredPrompt(promptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      window.__deferredPrompt = null;
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const triggerInstall = useCallback(async () => {
    // 1. If native Android PWA install prompt is ready, trigger it immediately
    const prompt = deferredPrompt || window.__deferredPrompt;
    if (prompt) {
      try {
        await prompt.prompt();
        const choice = await prompt.userChoice;
        if (choice.outcome === 'accepted') {
          setIsInstalled(true);
        }
        window.__deferredPrompt = null;
        setDeferredPrompt(null);
        return;
      } catch (err) {
        console.error('PWA install error:', err);
      }
    }

    // 2. If inside an in-app browser on Android (e.g. WhatsApp, Instagram), open directly in Chrome
    const ua = window.navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(ua);
    if (isAndroid && isInAppBrowser) {
      const cleanUrl = window.location.href.replace(/https?:\/\//, '');
      window.location.href = `intent://${cleanUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      return;
    }

    // 3. Otherwise show the 1-tap luxury install guide modal
    setShowGuideModal(true);
  }, [deferredPrompt, isInAppBrowser]);

  return {
    isInstalled,
    isIOS,
    canInstall: !isInstalled,
    showGuideModal,
    setShowGuideModal,
    triggerInstall
  };
}
