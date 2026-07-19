import React from 'react';
import { motion } from 'motion/react';
import FAQAccordion from './components/FAQAccordion';
import { CoachLogo, CoachDivider, CoachHangtag, LuxuryBagIcon } from './components/CoachLogo';

export default function App() {
  // Hardcoded target Redirect URL matching user's desired link
  const redirectUrl = 'https://giftclick.org/aff_c?offer_id=4280&aff_id=144361';

  return (
    <div className="min-h-screen bg-[#faf8f5] py-10 px-4 md:py-14 select-none relative overflow-x-hidden font-sans">
      
      {/* Centered Premium Top Coach Hangtag Ornament */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 bg-[#1c1d21] rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(28,29,33,0.15)] border border-neutral-800 text-[#dfc3a1] select-none hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <CoachHangtag size={44} />
        </motion.div>
      </div>

      {/* Main card stage container */}
      <div className="max-w-xl mx-auto">
        <motion.div
          layout
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white rounded-[32px] shadow-[0_12px_40px_rgba(74,53,37,0.04)] border border-neutral-100 p-6 md:p-9 relative overflow-hidden"
          id="main-card-container"
        >
          {/* Subtle warm luxury background glow inside card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-radial from-[#faf6f0] to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            {/* Coach Typographic Logo Header */}
            <div className="mt-2 mb-4">
              <CoachLogo />
            </div>

            {/* Premium Divider with Center Blue Diamond */}
            <CoachDivider />

            {/* Primary Titles */}
            <div className="text-center mb-6 mt-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1c1d21] tracking-tight leading-tight">
                Earn Your Reward
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-[#4a3525] mt-2 tracking-tight">
                Receive a £500 Coach Reward!
              </h2>
              <p className="text-sm text-neutral-500 mt-3 max-w-sm mx-auto leading-relaxed font-semibold">
                Follow these simple steps to{' '}
                <span className="text-[#8b5a2b] font-bold">
                  claim your £500 Coach Reward!
                </span>
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#fcfbf9] border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 p-4 rounded-[20px] transition-all hover:bg-[#faf8f4]">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  1
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Click on "Claim Now"
                </span>
              </div>

              <div className="bg-[#fcfbf9] border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 p-4 rounded-[20px] transition-all hover:bg-[#faf8f4]">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  2
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Enter your email and basic info
                </span>
              </div>

              <div className="bg-[#fcfbf9] border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 p-4 rounded-[20px] transition-all hover:bg-[#faf8f4]">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  3
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Complete 3-5 sponsored deals
                </span>
              </div>

              <div className="bg-[#fcfbf9] border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 p-4 rounded-[20px] transition-all hover:bg-[#faf8f4]">
                <span className="w-8 h-8 rounded-full bg-[#1c1d21] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  4
                </span>
                <span className="font-bold text-[#1c1d21] text-sm md:text-base">
                  Enjoy your £500 Coach Reward!
                </span>
              </div>
            </div>

            {/* Primary Call to Action Button redirects directly */}
            <div className="space-y-4 text-center">
              <a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#4a3525] hover:bg-[#38271a] hover:scale-[1.01] active:scale-[0.99] text-white font-extrabold py-4 px-8 rounded-full transition-all text-center tracking-wide text-lg shadow-md hover:shadow-lg cursor-pointer decoration-none border-none select-none"
              >
                <LuxuryBagIcon className="w-5 h-5 text-[#dfc3a1]" />
                <span>START NOW</span>
                <span className="text-base">➔</span>
              </a>

              {/* Terms and Disclaimer notes */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs text-[#8b5a2b] font-bold">
                  Limited time promotion · Terms apply
                </p>
                <p className="text-[10px] text-neutral-400 text-center leading-normal max-w-xs mx-auto">
                  This promotion is not sponsored, endorsed, or affiliated with Coach Inc.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trustpilot Excellent Rating Pill Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white border border-neutral-100/90 rounded-full px-5 py-3 shadow-[0_4px_16px_rgba(74,53,37,0.03)] flex items-center justify-between mt-5 text-sm"
          id="trustpilot-rating-bar"
        >
          {/* Left: Trustpilot Wordmark & Star */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Green star icon */}
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#00b67a] fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-extrabold text-[#001424] text-[15px] tracking-tight font-sans">
              Trustpilot
            </span>
          </div>

          {/* Vertical Separator */}
          <div className="w-[1px] h-5 bg-neutral-200/70 mx-3 shrink-0" />

          {/* Center: Stars and rating score */}
          <div className="flex items-center gap-2 justify-center flex-1 min-w-0">
            <div className="flex items-center text-[#00b67a] gap-0.5 shrink-0">
              {/* Star 1 */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {/* Star 2 */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {/* Star 3 */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {/* Star 4 */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {/* Star 5 (Half) */}
              <div className="relative w-3.5 h-3.5">
                <svg viewBox="0 0 24 24" className="absolute top-0 left-0 w-full h-full text-neutral-200 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div className="absolute top-0 left-0 w-[50%] h-full overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-7 h-3.5 text-[#00b67a] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs md:text-sm font-semibold truncate">
              <span className="text-[#324054] font-bold">4.5</span>
              <span className="text-neutral-300">•</span>
              <span className="text-[#4a5568] font-medium">Excellent</span>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-[1px] h-5 bg-neutral-200/70 mx-3 shrink-0" />

          {/* Right: Elegant Leather Bag Accessory Icon */}
          <div className="flex items-center shrink-0">
            <div className="bg-[#faf6f0] p-1.5 rounded-lg text-[#8b5a2b] shadow-xs border border-[#ebd9cb]/40">
              <LuxuryBagIcon className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Frequently Asked Questions accordion */}
        <FAQAccordion />

        {/* Decorative footer elements */}
        <footer className="text-center pb-8 pt-4">
          <p className="font-semibold text-sm text-[#8b5a2b] tracking-wide mb-1">
            Style More. Save More.
          </p>
          <p className="text-[11px] text-neutral-400">
            © 2025 Coach Promo · All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
