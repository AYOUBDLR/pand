import React, { useState, useEffect } from 'react';
import { Deal, UserInfo } from '../types';
import { DEFAULT_DEALS } from '../data';
import { CheckCircle2, Circle, Clock, Award, Star, Flame, RotateCw, Play, BarChart2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DealsConsoleProps {
  userInfo: UserInfo;
  onAllCompleted: () => void;
}

export default function DealsConsole({ userInfo, onAllCompleted }: DealsConsoleProps) {
  const [deals, setDeals] = useState<Deal[]>(DEFAULT_DEALS);
  const [activeMiniGame, setActiveMiniGame] = useState<Deal | null>(null);
  
  // Survey State
  const [surveyStep, setSurveyStep] = useState(1);
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);
  
  // Wheel State
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  // Video State
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoTimer, setVideoTimer] = useState(10);

  // Poll State
  const [selectedPollOption, setSelectedPollOption] = useState<string | null>(null);

  // Newsletter State
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Track completed count
  const completedCount = deals.filter(d => d.completed).length;
  const dealsRequired = 3;
  const isSatisfied = completedCount >= dealsRequired;

  const handleCompleteDeal = (dealId: number) => {
    setDeals(prevDeals =>
      prevDeals.map(d => (d.id === dealId ? { ...d, completed: true } : d))
    );
    setActiveMiniGame(null);
  };

  // Video Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVideoPlaying && videoTimer > 0) {
      interval = setInterval(() => {
        setVideoTimer(prev => prev - 1);
      }, 1000);
    } else if (videoTimer === 0 && isVideoPlaying) {
      setIsVideoPlaying(false);
      if (activeMiniGame) {
        handleCompleteDeal(activeMiniGame.id);
      }
    }
    return () => clearInterval(interval);
  }, [isVideoPlaying, videoTimer]);

  const startMiniGame = (deal: Deal) => {
    if (deal.completed) return;
    setActiveMiniGame(deal);
    
    // Reset individual mini-game states
    if (deal.type === 'survey') {
      setSurveyStep(1);
      setSurveyAnswers([]);
    } else if (deal.type === 'wheel') {
      setIsSpinning(false);
      setSpinResult(null);
      setRotation(0);
    } else if (deal.type === 'video') {
      setIsVideoPlaying(false);
      setVideoTimer(10);
    } else if (deal.type === 'poll') {
      setSelectedPollOption(null);
    } else if (deal.type === 'newsletter') {
      setNewsletterSubscribed(false);
    }
  };

  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Spin multiple times
    const randomDegrees = 1440 + Math.floor(Math.random() * 360);
    setRotation(randomDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      setSpinResult("Crown Heart Charm");
      if (activeMiniGame) {
        setTimeout(() => {
          handleCompleteDeal(activeMiniGame.id);
        }, 1200);
      }
    }, 4000);
  };

  return (
    <div className="relative">
      {/* Progress Card */}
      <div className="bg-[#fafafd] border border-neutral-100 rounded-2xl p-5 mb-6 shadow-xs">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-extrabold text-neutral-500 uppercase tracking-wider">
            Voucher Verification Progress
          </span>
          <span className="text-xs font-extrabold bg-[#fef6f2] text-[#c26d60] px-2.5 py-1 rounded-full">
            {completedCount} / {dealsRequired} Tasks
          </span>
        </div>

        {/* Custom animated progress bar */}
        <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden mb-3.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (completedCount / dealsRequired) * 100)}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-[#c26d60] h-full rounded-full"
          />
        </div>

        {isSatisfied ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#f2faf7] border border-emerald-100 rounded-xl p-3 text-center"
          >
            <p className="text-xs font-bold text-emerald-800 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              Awesome! Click below to retrieve your £500 code!
            </p>
            <button
              onClick={onAllCompleted}
              className="mt-2.5 w-full bg-[#10b981] hover:bg-emerald-600 text-white font-extrabold text-sm py-3 px-4 rounded-xl cursor-pointer transition-all uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 active:scale-[0.99]"
            >
              Unlock My £500 Voucher Now
            </button>
          </motion.div>
        ) : (
          <p className="text-xs text-neutral-500 leading-normal">
            Hi <strong>{userInfo.name.split(' ')[0]}</strong>, you need to complete at least{' '}
            <strong>{dealsRequired - completedCount} more</strong> sponsored deal{dealsRequired - completedCount > 1 ? 's' : ''} to unlock your high-value Pandora Rewards card instantly!
          </p>
        )}
      </div>

      {/* Task List */}
      <div className="space-y-3.5 mb-2">
        <h4 className="text-xs font-extrabold text-neutral-600 uppercase tracking-widest pl-1">
          Available Deals & Activities
        </h4>
        
        {deals.map((deal) => (
          <button
            key={deal.id}
            onClick={() => startMiniGame(deal)}
            disabled={deal.completed}
            className={`w-full text-left bg-white border ${
              deal.completed
                ? 'border-emerald-100 bg-[#fbfdfc] opacity-80 cursor-default'
                : 'border-neutral-100 hover:border-[#faf1ec] hover:shadow-[0_4px_16px_rgba(194,109,96,0.05)] cursor-pointer'
            } rounded-[20px] p-4 flex items-center justify-between gap-4 transition-all duration-300`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {deal.completed ? (
                  <CheckCircle2 className="w-5.5 h-5.5 text-[#10b981] fill-emerald-50 shrink-0" />
                ) : (
                  <Circle className="w-5.5 h-5.5 text-neutral-300 hover:text-[#c26d60] shrink-0 transition-colors" />
                )}
              </div>
              <div>
                <h5 className={`font-bold text-sm ${deal.completed ? 'text-neutral-500 line-through' : 'text-neutral-800'}`}>
                  {deal.title}
                </h5>
                <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                  {deal.description}
                </p>
                <div className="flex items-center gap-3 mt-2 text-[10px] uppercase tracking-wider font-extrabold text-neutral-400">
                  <span className="flex items-center gap-1 text-[#c26d60] bg-[#fef6f2] px-1.5 py-0.5 rounded-sm">
                    <Clock className="w-3 h-3 stroke-[2.2]" /> {deal.duration}
                  </span>
                  <span className="bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-sm">
                    {deal.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              {deal.completed ? (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-full">
                  Verified
                </span>
              ) : (
                <span className="text-xs font-extrabold text-[#c26d60] bg-[#fdf5f2] border border-[#fbf1ec] px-3.5 py-1.5 rounded-full hover:bg-[#c26d60] hover:text-white transition-colors duration-200">
                  Start
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Mini-Game Modal / Slide-over Overlay */}
      <AnimatePresence>
        {activeMiniGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl w-full max-w-md p-6 overflow-hidden shadow-2xl border border-neutral-100"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center border-b border-neutral-100 pb-3 mb-5">
                <span className="font-extrabold text-[#c26d60] flex items-center gap-1.5 uppercase text-xs tracking-wider">
                  <Award className="w-4 h-4 text-[#c26d60]" />
                  Active Sponsored Task
                </span>
                <button
                  onClick={() => setActiveMiniGame(null)}
                  className="text-neutral-400 hover:text-neutral-600 bg-neutral-100 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* SURVEY TASK */}
              {activeMiniGame.type === 'survey' && (
                <div className="space-y-4">
                  <div className="flex justify-between text-xs text-neutral-400 font-extrabold uppercase">
                    <span>Jewellery Preference Survey</span>
                    <span>Q {surveyStep} of 3</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#c26d60] h-full" style={{ width: `${(surveyStep / 3) * 100}%` }} />
                  </div>

                  {surveyStep === 1 && (
                    <div className="space-y-3.5">
                      <h4 className="font-bold text-base text-neutral-800">
                        How often do you make jewellery purchases for yourself or others?
                      </h4>
                      {['Monthly', 'A few times a year', 'Only for special occasions', 'Rarely'].map((ans) => (
                        <button
                          key={ans}
                          onClick={() => {
                            setSurveyAnswers(prev => [...prev, ans]);
                            setSurveyStep(2);
                          }}
                          className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-[#c26d60] hover:bg-[#fff9f6] text-sm text-neutral-700 font-medium transition-all duration-150 cursor-pointer"
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  )}

                  {surveyStep === 2 && (
                    <div className="space-y-3.5">
                      <h4 className="font-bold text-base text-neutral-800">
                        Which style profile fits your jewellery aesthetic best?
                      </h4>
                      {['Minimalist & Sleek', 'Vintage & Elegant', 'Personality Charms', 'Bold & Glamorous'].map((ans) => (
                        <button
                          key={ans}
                          onClick={() => {
                            setSurveyAnswers(prev => [...prev, ans]);
                            setSurveyStep(3);
                          }}
                          className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-[#c26d60] hover:bg-[#fff9f6] text-sm text-neutral-700 font-medium transition-all duration-150 cursor-pointer"
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  )}

                  {surveyStep === 3 && (
                    <div className="space-y-3.5">
                      <h4 className="font-bold text-base text-neutral-800">
                        Who is your primary recipient when buying luxury gifts?
                      </h4>
                      {['Myself (Self-Reward)', 'Spouse or Partner', 'Family Members (Mother, Daughter, etc.)', 'Close Friends'].map((ans) => (
                        <button
                          key={ans}
                          onClick={() => {
                            const final = [...surveyAnswers, ans];
                            setSurveyAnswers(final);
                            handleCompleteDeal(activeMiniGame.id);
                          }}
                          className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-[#c26d60] hover:bg-[#fff9f6] text-sm text-neutral-700 font-medium transition-all duration-150 cursor-pointer"
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* NEWSLETTER TASK */}
              {activeMiniGame.type === 'newsletter' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-base text-neutral-800 text-center">
                    Join the Exclusive Newsletter
                  </h4>
                  <p className="text-xs text-neutral-500 text-center leading-relaxed">
                    Get VIP product launches, anniversary gifts, and advance sale invitations. No spam, clear anytime.
                  </p>
                  
                  <div className="bg-[#fafafd] border border-neutral-100 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-bold bg-white px-3 py-2 rounded-lg border border-neutral-100">
                      <Mail className="w-4 h-4 text-[#c26d60]" />
                      {userInfo.email}
                    </div>
                    
                    <label className="flex items-start gap-2.5 cursor-pointer selection:bg-transparent">
                      <input
                        type="checkbox"
                        checked={newsletterSubscribed}
                        onChange={(e) => setNewsletterSubscribed(e.target.checked)}
                        className="mt-1 accent-[#c26d60] rounded-xs cursor-pointer"
                      />
                      <span className="text-[11px] text-neutral-500 leading-normal font-medium">
                        I consent to join the VIP promotions list and claim my sponsored deal credit instantly.
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={() => {
                      if (newsletterSubscribed) {
                        handleCompleteDeal(activeMiniGame.id);
                      }
                    }}
                    disabled={!newsletterSubscribed}
                    className="w-full bg-[#343538] hover:bg-[#1c1d21] disabled:bg-neutral-300 text-white font-extrabold py-3.5 rounded-xl cursor-pointer transition-all uppercase tracking-wider text-sm shadow-md"
                  >
                    Subscribe and Verify (20s)
                  </button>
                </div>
              )}

              {/* WHEEL TASK */}
              {activeMiniGame.type === 'wheel' && (
                <div className="space-y-4 text-center">
                  <h4 className="font-bold text-base text-neutral-800">
                    Spin the Pandora Lucky Charm Wheel
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
                    Spin the magic crown wheel to matches your lucky season charm and unlock your sponsored credit!
                  </p>

                  <div className="relative w-48 h-48 mx-auto my-6 flex items-center justify-center">
                    {/* Wheel container */}
                    <motion.div
                      animate={{ rotate: rotation }}
                      transition={{ duration: isSpinning ? 4 : 0.1, ease: "easeOut" }}
                      className="w-full h-full rounded-full border-4 border-[#1c1d21] bg-neutral-50 shadow-md relative overflow-hidden"
                      style={{ transformOrigin: 'center' }}
                    >
                      {/* Decorative spokes/slices in custom colors */}
                      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#fff9f6_0deg_60deg,#faf1ec_60deg_120deg,#fff9f6_120deg_180deg,#faf1ec_180deg_240deg,#fff9f6_240deg_300deg,#fbf1ee_300deg_360deg)] opacity-90" />
                      
                      {/* Slices markers / crown stars */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-[#c26d60]/20 absolute rotate-0"></div>
                        <div className="w-full h-0.5 bg-[#c26d60]/20 absolute rotate-60"></div>
                        <div className="w-full h-0.5 bg-[#c26d60]/20 absolute rotate-120"></div>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-neutral-600 absolute -top-1 translate-y-4">Love Charm</span>
                        <span className="text-[9px] font-bold text-neutral-600 absolute top-1/2 left-3 -translate-y-1/2 rotate-90">Galaxy Star</span>
                        <span className="text-[9px] font-bold text-neutral-600 absolute -bottom-1 -translate-y-4">Crown Heart</span>
                        <span className="text-[9px] font-bold text-neutral-600 absolute top-1/2 right-3 -translate-y-1/2 -rotate-90">Lucky Clover</span>
                      </div>
                    </motion.div>

                    {/* Arrow Pointer */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-[#c26d60] filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] z-10" />

                    {/* Wheel Center Button */}
                    <button
                      onClick={handleSpinWheel}
                      disabled={isSpinning || spinResult !== null}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#1c1d21] text-white flex items-center justify-center text-[10px] font-extrabold uppercase shadow-lg select-none cursor-pointer hover:scale-105 active:scale-95 transition-all outline-hidden border border-neutral-700 z-20"
                    >
                      {isSpinning ? <RotateCw className="w-4 h-4 animate-spin text-white" /> : "SPIN!"}
                    </button>
                  </div>

                  {spinResult && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 font-bold text-xs"
                    >
                      🎁 You landed on: <strong className="text-emerald-900">{spinResult}</strong>!<br />
                      Validating deal completion...
                    </motion.div>
                  )}
                </div>
              )}

              {/* VIDEO TASK */}
              {activeMiniGame.type === 'video' && (
                <div className="space-y-4 text-center">
                  <h4 className="font-bold text-base text-neutral-800">
                    Watch Sponsor Showcase
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
                    View our beautiful high-end partner promo to verify advertising credits for your voucher.
                  </p>

                  {/* Simulated High-End Video Player */}
                  <div className="bg-[#1c1d21] rounded-2xl aspect-video relative flex flex-col items-center justify-center overflow-hidden my-4 border border-neutral-800">
                    {/* Simulated Content */}
                    {isVideoPlaying ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        {/* Dynamic frame effects just to look ultra real */}
                        <div className="absolute inset-0 bg-radial from-neutral-800/10 to-black animate-pulse" />
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white text-3xl mb-2 backdrop-blur-xs"
                        >
                          💎
                        </motion.div>
                        <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase z-10">
                          Pandora Rose Gold Campaign 2026
                        </span>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="w-full bg-neutral-700 h-1 rounded-full overflow-hidden mb-1.5">
                            <div className="bg-[#c26d60] h-full" style={{ width: `${((10 - videoTimer) / 10) * 100}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-neutral-400 font-bold uppercase">
                            <span>Ad Showcase</span>
                            <span>{videoTimer}s remaining</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="w-16 h-16 rounded-full bg-white text-neutral-900 border border-neutral-100 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        >
                          <Play className="w-7 h-7 text-[#1c1d21] fill-[#1c1d21] translate-x-0.5" />
                        </button>
                        <span className="text-[11px] font-bold text-neutral-400 mt-3 uppercase tracking-wider">
                          Ready to Stream (10 Seconds)
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-[10px] text-neutral-400">
                    * The sponsor requires complete, active viewing to issue the voucher credit automatically.
                  </p>
                </div>
              )}

              {/* POLL TASK */}
              {activeMiniGame.type === 'poll' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-base text-neutral-800 text-center">
                    Share Your Luxury Preference
                  </h4>
                  <p className="text-xs text-neutral-500 text-center leading-relaxed">
                    Help us refine next season’s collections! Which matching theme looks more appealing?
                  </p>

                  <div className="grid grid-cols-2 gap-3.5 my-4">
                    <button
                      onClick={() => {
                        setSelectedPollOption('classic');
                        setTimeout(() => handleCompleteDeal(activeMiniGame.id), 1200);
                      }}
                      className={`p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                        selectedPollOption === 'classic'
                          ? 'border-emerald-500 bg-emerald-50/50 scale-[0.98]'
                          : 'border-neutral-200 hover:border-[#c26d60] bg-[#fafafd] hover:bg-white'
                      }`}
                    >
                      <span className="text-2xl block mb-2">💫</span>
                      <strong className="text-xs font-bold text-neutral-800 block mb-1">
                        Classic Silver
                      </strong>
                      <span className="text-[10px] text-neutral-400 leading-normal block">
                        Signature sterling silver charms with sparkling cubic zirconia.
                      </span>
                      {selectedPollOption && (
                        <span className="block mt-2 text-xs font-bold text-[#c26d60]">
                          {selectedPollOption === 'classic' ? '68% (Voted)' : '32%'}
                        </span>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setSelectedPollOption('rose');
                        setTimeout(() => handleCompleteDeal(activeMiniGame.id), 1200);
                      }}
                      className={`p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                        selectedPollOption === 'rose'
                          ? 'border-emerald-500 bg-emerald-50/50 scale-[0.98]'
                          : 'border-neutral-200 hover:border-[#c26d60] bg-[#fafafd] hover:bg-white'
                      }`}
                    >
                      <span className="text-2xl block mb-2">✨</span>
                      <strong className="text-xs font-bold text-neutral-800 block mb-1">
                        Rose Gold Glow
                      </strong>
                      <span className="text-[10px] text-neutral-400 leading-normal block">
                        Warm 14k rose gold plated metal blends with shimmering stones.
                      </span>
                      {selectedPollOption && (
                        <span className="block mt-2 text-xs font-bold text-[#c26d60]">
                          {selectedPollOption === 'rose' ? '32% (Voted)' : '68%'}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
