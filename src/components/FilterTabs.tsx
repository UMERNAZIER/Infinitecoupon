'use client';

import { Coupon } from '@/lib/data';

interface FilterTabsProps {
  coupons: Coupon[];
  activeTab: 'All' | 'Codes' | 'Deals';
  onTabChange: (tab: 'All' | 'Codes' | 'Deals') => void;
}

export default function FilterTabs({ coupons, activeTab, onTabChange }: FilterTabsProps) {
  const codesCount = coupons.filter(c => c.type === 'code').length;
  const dealsCount = coupons.filter(c => c.type === 'deal').length;
  const allCount = coupons.length;

  const tabs = [
    { id: 'All', label: `All (${allCount})` },
    { id: 'Codes', label: `Codes (${codesCount})` },
    { id: 'Deals', label: `Deals (${dealsCount})` }
  ] as const;

  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
            activeTab === tab.id
              ? 'bg-[#059669] text-white'
              : 'bg-[#F1F5F9] text-[#334155] hover:bg-[#E2E8F0]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
