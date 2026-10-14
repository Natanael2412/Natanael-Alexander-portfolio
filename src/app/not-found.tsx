import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#000000] text-[#ededed] font-sans relative z-50">
      <h1 className="font-primary text-5xl md:text-6xl font-bold tracking-tighter mb-4 chromatic-hover cursor-default">
        404 // Out of Bounds
      </h1>
      <p className="text-[#a3a3a3] text-sm uppercase tracking-widest mb-8 text-center max-w-md">
        The signal was lost. This route does not exist in the current architecture.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 border border-[#262626] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase inline-block chromatic-hover"
      >
        Return to Root
      </Link>
    </div>
  );
}
