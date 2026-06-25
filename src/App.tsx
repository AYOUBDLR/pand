import React, { useState, useEffect } from 'react';
import { Gift, ExternalLink, Settings, Link2, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FAQAccordion from './components/FAQAccordion';
import { PandoraCrownO } from './components/PandoraLogo';

export default function App() {
  // Configurable Redirect URL state
  const [redirectUrl, setRedirectUrl] = useState(() => {
    return localStorage.getItem('pandora_redirect_url') || 'https://linkthem.net/aff_c?offer_id=174&aff_id=144361';
  });
  const [targetType, setTargetType] = useState<'new_tab' | 'same_tab'>(() => {
    return (localStorage.getItem('pandora_target_type') as 'new_tab' | 'same_tab') || 'new_tab';
  });
  
  const [showConfig, setShowConfig] = useState(false);
  const [tempUrl, setTempUrl] = useState(redirectUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state to localStorage
  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    let sanitizedUrl = tempUrl.trim();
    if (sanitizedUrl && !/^https?:\/\//i.test(sanitizedUrl)) {
      sanitizedUrl = 'https://' + sanitizedUrl;
    }
    setRedirectUrl(sanitizedUrl);
    setTempUrl(sanitizedUrl);
    localStorage.setItem('pandora_redirect_url', sanitizedUrl);
    localStorage.setItem('pandora_target_type', targetType);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setShowConfig(false);
    }, 1200);
  };

  const handleClaimClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're open on the same tab, we navigate, else the default link action target="_blank" handles it
    if (targetType === 'same_tab') {
      e.preventDefault();
      window.top ? (window.top.location.href = redirectUrl) : (window.location.href = redirectUrl);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5f0] py-10 px-4 md:py-14 select-none relative overflow-x-hidden font-sans">
      
      {/* Configuration Widget for the Creator */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-neutral-50 text-neutral-600 rounded-full border border-neutral-200 text-xs font-bold shadow-xs transition-all cursor-pointer"
        >
          <Settings className="w-3.5 h-3.5 animate-spin-hover" />
          Offer Settings
        </button>

        <AnimatePresence>
          {showConfig && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl z-50 text-[#1a1a1a]"
            >
              <form onSubmit={handleSaveConfig} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <Link2 className="w-4 h-4 text-[#c26d60]" />
                  <h4 className="font-bold text-xs tracking-wide uppercase text-neutral-700">
                    Redirect Configuration
                  </h4>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-neutral-500 uppercase tracking-widest mb-1">
                    Offer Link (Affiliate URL)
                  </label>
                  <input
                    type="text"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    placeholder="e.g. https://your-affiliate.com/offer"
                    className="w-full text-xs font-medium px-3 py-2 border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#fdf5f2] focus:border-[#d38b80]"
                  />
                  <p className="text-[10px] text-neutral-400 mt-1 leading-normal">
                    This is where visitors will go when they click the <strong>CLAIM NOW</strong> button.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-neutral-500 uppercase tracking-widest mb-1.5">
                    Opening Mode
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetType('new_tab')}
                      className={`flex-1 text-center py-1.5 text-xs font-bold rounded-lg border ${
                        targetType === 'new_tab'
                          ? 'border-[#c26d60] bg-[#fffcfb] text-[#c26d60]'
                          : 'border-neutral-250 bg-neutral-50 text-neutral-600'
                      } transition-all cursor-pointer`}
                    >
                      New Tab
                    </button>
                    <button
                      type="button"
                      onClick={() => setTargetType('same_tab')}
                      className={`flex-1 text-center py-1.5 text-xs font-bold rounded-lg border ${
                        targetType === 'same_tab'
                          ? 'border-[#c26d60] bg-[#fffcfb] text-[#c26d60]'
                          : 'border-neutral-250 bg-neutral-50 text-neutral-600'
                      } transition-all cursor-pointer`}
                    >
                      Same Tab
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1c1d21] hover:bg-black text-white text-xs font-extrabold py-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                >
                  {saveSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                      Saved Successfully!
                    </>
                  ) : (
                    "Save & Apply Link"
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Centered Premium Top Crown Logo Icon Group */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 bg-[#1c1d21] rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(28,29,33,0.15)] border border-neutral-800 text-white select-none cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          <PandoraCrownO className="text-[#faf5f0]" size={34} />
        </motion.div>
      </div>

      {/* Main card stage container */}
      <div className="max-w-xl mx-auto">
        <motion.div
          layout
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white rounded-[32px] shadow-[0_12px_45px_rgba(194,109,96,0.06)] border border-neutral-100 p-6 md:p-9 relative overflow-hidden"
        >
          {/* Subtle background glow overlay inside card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-radial from-[#fff5f2] to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            {/* Seasonal Badge */}
            <div className="text-center mb-4 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#fef6f2] border border-[#fbf1ec] text-[10px] md:text-xs font-bold tracking-widest text-[#c26d60] rounded-full uppercase">
                🥇 Seasonal Reward Program
              </span>
            </div>

            {/* Primary Titles */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1c1d21] tracking-tight leading-tight">
                Earn Your Reward
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-[#c26d60] mt-1.5 tracking-tight">
                Receive a £500 Pandora Reward!
              </h2>
              <p className="text-sm text-neutral-500 mt-2.5 max-w-sm mx-auto leading-relaxed font-semibold">
                Follow these simple steps to{' '}
                <span className="text-[#c26d60] font-bold">
                  claim your £500 Pandora Reward!
                </span>
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#faf1ec] hover:bg-[#ffece2] flex items-center gap-4 p-4 rounded-[20px] transition-colors duration-250">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  1
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Click on "Claim Now"
                </span>
              </div>

              <div className="bg-[#faf1ec] hover:bg-[#ffece2] flex items-center gap-4 p-4 rounded-[20px] transition-colors duration-250">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  2
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Enter your email and basic info
                </span>
              </div>

              <div className="bg-[#faf1ec] hover:bg-[#ffece2] flex items-center gap-4 p-4 rounded-[20px] transition-colors duration-250">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  3
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Complete 3-5 sponsored deals
                </span>
              </div>

              <div className="bg-[#faf1ec] hover:bg-[#ffece2] flex items-center gap-4 p-4 rounded-[20px] transition-colors duration-250">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  4
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Enjoy your £500 Pandora Reward!
                </span>
              </div>
            </div>

            {/* Primary Call to Action Button redirects directly */}
            <div className="space-y-4 text-center">
              <a
                href={redirectUrl}
                target={targetType === 'new_tab' ? '_blank' : '_top'}
                onClick={handleClaimClick}
                rel="noopener noreferrer"
                className="block w-full bg-[#343538] hover:bg-[#1c1d21] hover:scale-[1.01] active:scale-[0.99] text-white font-extrabold py-4 px-8 rounded-full transition-all text-center tracking-wide text-lg shadow-md hover:shadow-lg cursor-pointer decoration-none border-none select-none"
              >
                CLAIM NOW
              </a>

              {/* Tiny disclaimer note matching standard affiliate offers */}
              <p className="text-[11px] text-neutral-400 text-center leading-normal max-w-xs mx-auto">
                By clicking "Claim Now", you agree to complete the required steps to receive your £500 rewards code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Frequently Asked Questions accordion */}
        <FAQAccordion />

        {/* Decorative Divider */}
        <div className="border-t border-neutral-200/60 max-w-md mx-auto my-6" />

        {/* Affiliate Bottom Credits Footer */}
        <footer className="text-center text-xs text-neutral-400 font-semibold space-y-2.5 pb-2">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <a
              href="#user-agreement"
              className="text-[#c26d60] hover:text-[#b05c50] hover:underline"
            >
              User Agreement
            </a>
            <span>•</span>
            <a
              href="#privacy-policy"
              className="text-[#c26d60] hover:text-[#b05c50] hover:underline"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href={redirectUrl}
              target={targetType === 'new_tab' ? '_blank' : '_top'}
              onMouseDown={handleClaimClick}
              rel="noopener noreferrer"
              className="text-[#c26d60] hover:text-[#b05c50] hover:underline inline-flex items-center gap-0.5"
            >
              Pandora.net
              <ExternalLink className="w-3 h-3 text-[#c26d60]/80" />
            </a>
          </div>
          <p className="text-[10px] text-neutral-400">
            © 2026 Pandora Rewards Center. Not affiliated with Pandora A/S.
          </p>
        </footer>
      </div>
    </div>
  );
}
