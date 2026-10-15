'use client'

import React, { useEffect, useState } from 'react';
import { Check, X, Copy, ExternalLink } from 'lucide-react';

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  storeName: string;
  redirectUrl: string;
}

export default function CouponModal({ isOpen, onClose, code, storeName, redirectUrl }: CouponModalProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  };

  const handleOpenStore = () => {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center mt-2">
          <div className="w-12 h-12 bg-[#D1FAE5] text-[#059669] rounded-full flex items-center justify-center mb-4">
            <Check size={28} strokeWidth={3} />
          </div>
          
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Coupon code</h2>
          
          <p className="text-[#64748B] mb-6">
            Paste this code at checkout to apply your discount.
          </p>

          <div className="w-full border-2 border-dashed border-[#059669] bg-[#F1F5F9] p-4 rounded-xl mb-6 relative group">
            <span className="font-mono text-3xl font-bold text-[#0F172A] tracking-wider select-all">
              {code}
            </span>
          </div>
          {copyFailed && <p role="status" className="text-sm text-amber-700 mb-4">Copy was blocked by your browser. Select the code above to copy it manually.</p>}

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied again!' : 'Copy Code'}
            </button>
            
            <button
              onClick={handleOpenStore}
              className="w-full py-3 px-4 rounded-lg border-2 border-[#059669] text-[#059669] hover:bg-[#F1F5F9] font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Go to {storeName} <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
