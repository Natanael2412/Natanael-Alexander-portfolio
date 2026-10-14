'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#000000] text-[#ededed] font-sans relative z-50">
      <h1 className="font-primary text-5xl md:text-6xl font-bold tracking-tighter mb-4 chromatic-hover cursor-default">
        500 // System Interruption
      </h1>
      <p className="text-[#a3a3a3] text-sm uppercase tracking-widest mb-8">
        An unexpected error occurred during execution.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 border border-[#262626] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase"
        >
          Re-initialize Session
        </button>
        <button
          onClick={() => console.log('Report trace logic')}
          className="px-6 py-3 border border-transparent hover:border-[#262626] text-[#a3a3a3] hover:text-white transition-all duration-300 text-xs tracking-widest uppercase"
        >
          Report Trace
        </button>
      </div>
    </div>
  );
}
