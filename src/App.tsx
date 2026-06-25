import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import FAQAccordion from './components/FAQAccordion';
import { PandoraCrownO } from './components/PandoraLogo';

export default function App() {
  // Hardcoded target Redirect URL matching user configuration preference
  const redirectUrl = 'https://linkthem.net/aff_c?offer_id=174&aff_id=144361';

  return (
    <div className="min-h-screen bg-[#faf5f0] py-10 px-4 md:py-14 select-none relative overflow-x-hidden font-sans">
      
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
                target="_blank"
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
              target="_blank"
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
