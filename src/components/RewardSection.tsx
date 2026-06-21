import React, { useState, useEffect } from 'react';
import { UserInfo } from '../types';
import { Copy, Check, Calendar, ArrowRight, ShieldCheck, Ticket, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PandoraCrownO } from './PandoraLogo';

interface RewardSectionProps {
  userInfo: UserInfo;
  onReset: () => void;
}

export default function RewardSection({ userInfo, onReset }: RewardSectionProps) {
  const [voucherCode] = useState(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `PAN-500-${code}`;
  });

  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate 25 decorative background sparkles/confetti elements for particle effect
  const [sparkles, setSparkles] = useState<{ id: number; left: number; delay: number; scale: number; duration: number }[]>([]);
  useEffect(() => {
    const list = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      scale: 0.5 + Math.random() * 0.8,
      duration: 3 + Math.random() * 3,
    }));
    setSparkles(list);
  }, []);

  return (
    <div className="relative pt-2">
      {/* Background Falling Confetti */}
      <div className="absolute inset-x-0 -top-12 bottom-0 overflow-hidden pointer-events-none z-10">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{ y: -30, x: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: '100%',
              x: Math.sin(s.id) * 40,
              rotate: 360,
              opacity: [1, 1, 0.4, 0]
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-3.5 h-3.5 rounded-full`}
            style={{
              left: `${s.left}%`,
              scale: s.scale,
              backgroundColor: ['#c26d60', '#eeb2a9', '#fbf1ee', '#10b981', '#f59e0b'][s.id % 5]
            }}
          />
        ))}
      </div>

      <div className="text-center mb-6 relative z-20">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-xs font-bold tracking-wider text-emerald-700 rounded-full uppercase border border-emerald-100">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-600" />
          Reward Confirmed & Issued
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1c1d21] mt-2">
          Your Reward is Ready!
        </h3>
        <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
          Congratulations, <strong>{userInfo.name}</strong>! Your verification steps were successful and your premium voucher is active.
        </p>
      </div>

      {/* Premium Digital Voucher */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="bg-[#1c1d21] text-[#faf5f0] rounded-[30px] p-6 text-center shadow-2xl relative overflow-hidden border border-neutral-800"
      >
        {/* Subtle metallic reflection lines */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#c26d60]/10 to-transparent pointer-events-none" />
        
        {/* Pandora Branding Mockup */}
        <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <PandoraCrownO className="text-[#eeb2a9]" size={22} />
            <span className="text-xs font-bold tracking-widest text-[#eeb2a9]/80 uppercase">
              PANDORA REWARDS
            </span>
          </div>
          <div className="bg-[#c26d60] text-xs font-extrabold px-2.5 py-1 text-white rounded-full uppercase">
            £500 VOUCHER
          </div>
        </div>

        {/* Certificate Recipient */}
        <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
          Authorized Recipient
        </p>
        <h4 className="text-lg font-bold text-white mt-0.5 tracking-tight px-1 truncate">
          {userInfo.name}
        </h4>

        {/* Unique Claim Code Display */}
        <div className="my-5 bg-black/40 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center relative">
          <span className="text-[9px] uppercase font-extrabold tracking-widest text-neutral-500 mb-1">
            Redeemable Promo Code
          </span>
          
          <code className="text-2xl md:text-3xl font-mono font-extrabold tracking-wider text-white select-all">
            {voucherCode}
          </code>

          <button
            onClick={handleCopy}
            className="mt-3.5 bg-[#cb7b70] hover:bg-[#c26d60] active:scale-[0.98] text-white font-bold text-xs py-2 px-5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy Code
              </>
            )}
          </button>
        </div>

        {/* Mock Graphic Barcode */}
        <div className="flex flex-col items-center gap-1.5 mb-2">
          <div className="h-10 bg-white/10 rounded-sm w-44 px-3 flex items-center justify-between gap-0.5 overflow-hidden">
            {Array.from({ length: 32 }).map((_, i) => {
              const widths = [1, 2, 3, 4, 1.5];
              const w = widths[i % widths.length];
              return (
                <div
                  key={i}
                  className="bg-neutral-300 h-full shrink-0"
                  style={{ width: `${w}px`, opacity: i % 7 === 0 ? 0.2 : 0.9 }}
                />
              );
            })}
          </div>
          <span className="text-[9px] font-mono text-neutral-400 tracking-wider">
            *93847-PAN-500-2026*
          </span>
        </div>

        {/* Expiration Timer Box */}
        <div className="bg-white/5 border border-white/5 rounded-xl py-2 px-4 mt-4 text-center">
          <p className="text-[11px] text-neutral-300 leading-normal font-medium">
            🔒 Code reserved for: <strong className="text-[#eeb2a9] text-sm font-bold font-mono ml-1">{formatTime(timeLeft)}</strong> before returning to the public pool.
          </p>
        </div>
      </motion.div>

      {/* Guidebooks on Redemption */}
      <div className="bg-white border border-neutral-100 rounded-2xl p-5 my-5 shadow-xs space-y-3.5">
        <h5 className="font-bold text-sm text-neutral-800 flex items-center gap-1.5 uppercase tracking-wider text-xs">
          <Calendar className="w-4 h-4 text-[#c26d60]" />
          Voucher Redemption Instructions
        </h5>
        
        <ul className="space-y-2.5 text-xs text-neutral-600 leading-relaxed font-medium">
          <li className="flex gap-2">
            <span className="w-5 h-5 rounded-full bg-[#faf1ec] text-[#c26d60] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              1
            </span>
            <span>
              <strong>Online Checkout:</strong> Shop at <strong>Pandora.net</strong> and enter your unique code in the <em>Promo/Gift Code</em> field at the final checkout panel.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="w-5 h-5 rounded-full bg-[#faf1ec] text-[#c26d60] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              2
            </span>
            <span>
              <strong>In-store Redemption:</strong> Present the virtual barcode above on your phone to any cashier associate at a local authorised Pandora retailer or outlet.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="w-5 h-5 rounded-full bg-[#faf1ec] text-[#c26d60] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              3
            </span>
            <span>
              <strong>Activation:</strong> This certificate operates exactly like cash and applies to all charms, gold rings, and luxury jewelry lines!
            </span>
          </li>
        </ul>
      </div>

      {/* Disclaimer reminder */}
      <div className="bg-[#fafafd] border border-neutral-100 p-4 rounded-xl flex gap-2.5 text-[10px] text-neutral-400 leading-normal">
        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <span>
          <strong>Double Claim Protection:</strong> To maintain fairness, each individual customer may only complete this seasonal rewards campaign once. Subsequent claims from the same IP, name, or phone number will be declined automatically to safeguard promotional reserves.
        </span>
      </div>

      {/* Go Back / Reset claim button */}
      <div className="text-center pt-4 mb-2">
        <button
          onClick={onReset}
          className="text-xs text-[#c26d60] hover:text-[#b05c50] font-extrabold tracking-wider uppercase underline underline-offset-4 cursor-pointer"
        >
          Return to Portal Root
        </button>
      </div>
    </div>
  );
}
