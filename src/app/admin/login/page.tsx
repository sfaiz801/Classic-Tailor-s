'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('classictailors.mir@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/admin';
      }, 800);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#1A0E0A] px-4 py-12 overflow-hidden selection:bg-[#D4AF37] selection:text-[#2C1810]">
      {/* 3D Animated Background Gradients & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#800020]/40 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#D4AF37]/20 to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Main 3D Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md z-10"
      >
        <div className="relative rounded-3xl bg-gradient-to-b from-[#2C1810]/95 via-[#23120C]/95 to-[#1A0E0A]/95 p-8 sm:p-10 border border-[#D4AF37]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-xl">
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Logo & Header */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotateY: 180, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#800020] via-[#5C0015] to-[#2C1810] border border-[#D4AF37]/50 shadow-xl mb-4 text-[#F4E4BC] cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif font-black text-2xl tracking-wider text-[#D4AF37]">CT</span>
                <span className="text-[9px] uppercase tracking-widest text-[#F4E4BC]/70 -mt-1">1995</span>
              </div>
            </motion.div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Classic Tailor&apos;s
            </h1>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F4E4BC] text-xs font-semibold mt-2">
              <ShieldCheck size={14} className="text-[#D4AF37]" />
              <span>Super Admin Portal</span>
            </div>
            <p className="text-xs text-[#E8DCC8]/70 mt-2">
              Mirganj, Gopalganj • Live Management System
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F4E4BC] mb-2">
                Classic Tailor Gmail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#D4AF37]/80">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="classictailors.mir@gmail.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-black/40 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 rounded-2xl text-white text-sm placeholder-white/30 transition-all outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F4E4BC]">
                  Master Passkey
                </label>
                <button
                  type="button"
                  onClick={() => setPassword('ClassicTailors@1995')}
                  className="text-[11px] text-[#D4AF37] hover:underline"
                >
                  Use Default Passkey
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#D4AF37]/80">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter Master Password"
                  className="w-full pl-11 pr-11 py-3.5 bg-black/40 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 rounded-2xl text-white text-sm placeholder-white/30 transition-all outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/50 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-[11px] text-[#E8DCC8]/50 mt-1.5 flex items-center gap-1">
                <Sparkles size={12} className="text-[#D4AF37]" />
                <span>Master passkey: <code>ClassicTailors@1995</code></span>
              </p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5"
                >
                  <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Verified! Redirecting to Super Admin Dashboard...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading || success}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F4E4BC] to-[#D4AF37] text-[#2C1810] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#2C1810] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In as Super Admin</span>
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </form>

          {/* Footer security badge */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-[#E8DCC8]/60">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>256-Bit Encrypted Session • Protected Route</span>
            </div>
            <a
              href="/"
              className="inline-block mt-3 text-xs text-[#D4AF37] hover:underline hover:text-white transition-colors"
            >
              ← Return to Customer Website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
