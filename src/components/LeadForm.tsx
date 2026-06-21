import React, { useState } from 'react';
import { UserInfo } from '../types';
import { User, Mail, Phone, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadFormProps {
  onSubmit: (info: UserInfo) => void;
  onBack: () => void;
}

export default function LeadForm({ onSubmit, onBack }: LeadFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) {
      tempErrors.name = 'Full name is required';
    } else if (name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = 'Please provide a valid email address';
    }

    if (!phone.trim()) {
      tempErrors.phone = 'Mobile number is required for voucher delivery';
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(phone)) {
      tempErrors.phone = 'Please provide a valid phone number';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate verification lag
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmit({ name, email, phone });
      }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="p-1"
    >
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fef6f2] text-xs font-bold tracking-wider text-[#c26d60] rounded-full uppercase">
          Step 2 of 4 • Account Matching
        </span>
        <h3 className="text-2xl font-extrabold text-[#1c1d21] mt-2">
          Verify Your Profile
        </h3>
        <p className="text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
          We use this information to secure your unique £500 Pandora code and prevent duplicate entries.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 ml-1">
            Full Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400">
              <User className="w-5 h-5 pointer-events-none" />
            </span>
            <input
              type="text"
              placeholder="e.g. Amanda Jones"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
              }}
              className={`w-full bg-[#fafafd] text-neutral-800 text-sm md:text-base pl-11 pr-4 py-3.5 rounded-2xl border ${
                errors.name ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-neutral-200 focus:ring-2 focus:ring-[#fdf5f2] focus:border-[#d38b80]'
              } transition-all outline-hidden font-medium`}
            />
          </div>
          {errors.name && (
            <p className="text-xs font-medium text-red-500 mt-1.5 ml-1">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 ml-1">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400">
              <Mail className="w-5 h-5 pointer-events-none" />
            </span>
            <input
              type="email"
              placeholder="e.g. amanda@domain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              className={`w-full bg-[#fafafd] text-neutral-800 text-sm md:text-base pl-11 pr-4 py-3.5 rounded-2xl border ${
                errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-neutral-200 focus:ring-2 focus:ring-[#fdf5f2] focus:border-[#d38b80]'
              } transition-all outline-hidden font-medium`}
            />
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-red-500 mt-1.5 ml-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 ml-1">
            Mobile Number (Voucher SMS Backup)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400">
              <Phone className="w-5 h-5 pointer-events-none" />
            </span>
            <input
              type="tel"
              placeholder="e.g. +44 7123 456789"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
              }}
              className={`w-full bg-[#fafafd] text-neutral-800 text-sm md:text-base pl-11 pr-4 py-3.5 rounded-2xl border ${
                errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-neutral-200 focus:ring-2 focus:ring-[#fdf5f2] focus:border-[#d38b80]'
              } transition-all outline-hidden font-medium`}
            />
          </div>
          <p className="text-[11px] text-neutral-400 mt-1 ml-1 leading-relaxed">
            Required so we can text you a copy of the final voucher code if you close this screen.
          </p>
          {errors.phone && (
            <p className="text-xs font-medium text-red-500 mt-1 ml-1">{errors.phone}</p>
          )}
        </div>

        {/* Security / Ad Disclosure compliance notice */}
        <div className="bg-[#fafafd] rounded-2xl p-4 border border-neutral-100 flex gap-3 mt-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div className="text-[11px] text-neutral-500 leading-normal">
            <strong>Voucher Security Protocol:</strong> Your profile is secured with bank-grade 256-bit encryption. Your details will be held securely and used only to process your £500 Pandora claims.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#343538] hover:bg-[#1c1d21] disabled:bg-neutral-400 text-white font-bold py-4 px-6 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 text-md shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                CONTINUE TO DEALS
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={onBack}
            className="text-xs text-neutral-500 hover:text-neutral-700 py-2 font-semibold transition-colors cursor-pointer text-center"
          >
            Cancel and Return
          </button>
        </div>
      </form>
    </motion.div>
  );
}
