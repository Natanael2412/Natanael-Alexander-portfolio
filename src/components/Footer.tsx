import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#1f1f1f] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <h2 className="font-primary text-2xl font-bold tracking-tight">Available for new projects</h2>
          <p className="font-secondary text-[#a3a3a3] text-sm">Let's engineer high-impact systems together.</p>
        </div>

        <div className="flex gap-8 font-secondary text-xs uppercase tracking-widest text-[#a3a3a3]">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/insight" className="hover:text-white transition-colors">Insight</Link>
          <a href="mailto:hello@natanael.com" className="hover:text-white transition-colors">hello@natanael.com</a>
        </div>

      </div>
    </footer>
  );
}
