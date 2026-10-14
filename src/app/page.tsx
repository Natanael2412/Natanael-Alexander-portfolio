import { getDictionary } from '@/lib/i18n';

export default async function Home() {
  const dict = await getDictionary();

  return (
    <div className="w-full pt-32 pb-20 px-6">
      <section className="min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto">
        <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-6 max-w-4xl">
          {dict.hero.title}
        </h1>
        <p className="font-secondary text-lg md:text-xl text-[#a3a3a3] max-w-2xl mb-12">
          {dict.hero.subtitle}
        </p>
        <div>
          <button className="px-8 py-4 border border-[#262626] hover:bg-white hover:text-black transition-all duration-300 font-secondary text-xs tracking-widest uppercase chromatic-hover">
            {dict.hero.cta}
          </button>
        </div>
      </section>

      {/* Marquee Placeholder */}
      <section className="w-full py-24 border-y border-[#1f1f1f] overflow-hidden my-24">
        <div className="font-accent text-6xl md:text-8xl whitespace-nowrap opacity-20">
          EXPERIMENTAL MOTION SHOWCASE — GSAP SCROLLTRIGGER — 
        </div>
      </section>

      {/* Featured Works Placeholder */}
      <section className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border border-[#1f1f1f] relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="font-primary text-9xl font-black">FEATURED WORKS</span>
        </div>
      </section>
    </div>
  );
}
