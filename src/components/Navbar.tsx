'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<'en'|'id'>('en');

  // Client-side locale toggling mock logic for Phase 1
  const toggleLocale = () => {
    // We will hook this up to the Server Action later
    setLocaleState(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 bg-transparent mix-blend-difference text-white">
      {/* Left: Hamburger Morphing */}
      <div className="flex items-center gap-4 cursor-pointer group">
        <div className="flex flex-col gap-[6px] w-8">
          <div className="h-[1px] bg-white w-full transition-transform group-hover:translate-x-1"></div>
          <div className="h-[1px] bg-white w-2/3 transition-transform group-hover:-translate-x-1"></div>
        </div>
        <span className="font-secondary text-xs uppercase tracking-widest hidden md:block">Menu</span>
      </div>

      {/* Center: Minimal Typographic Wordmark */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="font-primary font-bold text-lg tracking-tight chromatic-hover">
          NATANAEL
        </Link>
      </div>

      {/* Right: Switcher EN | ID and Contact */}
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleLocale}
          className="font-secondary text-xs uppercase tracking-widest hover:text-[#a3a3a3] transition-colors"
        >
          {locale === 'en' ? 'ID' : 'EN'}
        </button>
        <Link 
          href="/contact"
          className="font-secondary text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
