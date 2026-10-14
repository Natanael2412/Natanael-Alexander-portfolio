'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col items-center justify-center bg-[#000000] text-[#ededed]">
        <div className="flex flex-col items-center text-center p-8 max-w-md">
          <h1 className="text-4xl font-bold tracking-tight mb-4 chromatic-hover">
            500 // System Interruption
          </h1>
          <p className="text-[#a3a3a3] mb-8 text-sm">
            Fatal error occurred at the root level.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="px-6 py-2 border border-[#262626] hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-widest"
            >
              Re-initialize Session
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
