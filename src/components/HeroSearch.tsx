'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-1">
      <div className="flex-grow flex items-center px-4">
        <Search className="text-slate-400 w-5 h-5 mr-3" />
        <input
          type="text"
          placeholder="Search for stores, categories, or coupons..."
          className="w-full py-3 text-slate-800 placeholder-slate-400 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
      >
        Search
      </button>
    </form>
  );
}
