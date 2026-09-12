import {
  ArrowRight,
  Check,
  MessageSquare,
  Figma,
  GitBranch,
  Layers3,
  MousePointer2,
  Play,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureIllustration, HeroIllustration, Reveal } from './Illustrations';
import { DOWNLOAD_URL, sitePath, SiteFooter, SiteHeader } from './SiteChrome';

const SectionIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) => (
  <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">{eyebrow}</p>
    <h2 className="text-balance text-4xl font-medium tracking-[-0.045em] text-[#231b35] md:text-[52px]">{title}</h2>
    <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 md:text-lg">{copy}</p>
  </Reveal>
);

const BrowserBar = ({ label }: { label: string }) => (
  <div className="flex h-10 items-center gap-3 border-b border-slate-200 bg-white px-4">
    <div className="flex gap-1.5">
      <span className="size-2 rounded-full bg-slate-200" />
      <span className="size-2 rounded-full bg-slate-200" />
      <span className="size-2 rounded-full bg-slate-200" />
    </div>
    <div className="flex h-5 flex-1 items-center rounded-md bg-slate-100 px-2 text-[8px] font-medium text-slate-400">{label}</div>
  </div>
);

const GalleryPreview = ({ type }: { type: 'travel' | 'finance' | 'commerce' | 'wellness' | 'studio' | 'mobile' }) => {
  if (type === 'travel') {
    return (
      <div className="h-full bg-[#f7f4ef] p-5">
        <div className="flex items-center justify-between text-[8px] font-bold text-[#183d32]"><span>morrow</span><span>Discover &nbsp; Stays &nbsp; Journal</span></div>
        <div className="mt-5 grid grid-cols-[1.1fr_.9fr] gap-3">
          <div><p className="text-[9px] uppercase tracking-widest text-[#97745c]">Dolomites, Italy</p><p className="mt-2 text-2xl font-medium leading-none text-[#183d32]">Stay closer<br />to wonder.</p><div className="mt-4 h-5 w-20 rounded-full bg-[#183d32]" /></div>
          <div className="h-28 rounded-t-[36px] bg-gradient-to-b from-[#cbd8d3] via-[#9aafa4] to-[#34594d]" />
        </div>
      </div>
    );
  }

  if (type === 'finance') {
    return (
      <div className="h-full bg-[#f3f6f4] p-4">
        <div className="mb-4 flex items-center justify-between"><span className="text-[9px] font-bold text-[#143c32]">Luma</span><span className="size-5 rounded-full bg-[#d8e7df]" /></div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded-xl bg-[#143c32] p-3 text-white"><p className="text-[8px] text-white/60">Total balance</p><p className="mt-2 text-xl font-medium">$24,860</p><div className="mt-4 flex h-10 items-end gap-1">{['h-[38%]', 'h-[54%]', 'h-[42%]', 'h-[64%]', 'h-[52%]', 'h-[78%]', 'h-[70%]', 'h-[90%]'].map((height, index) => <span key={`${height}-${index}`} className={`flex-1 rounded-t bg-[#8dd8b5] ${height}`} />)}</div></div>
          <div className="rounded-xl border border-[#dfe8e3] bg-white p-3"><p className="text-[8px] text-slate-400">Saved</p><p className="mt-2 text-sm font-semibold text-[#143c32]">72%</p><div className="mt-6 size-10 rounded-full border-[7px] border-[#8dd8b5] border-r-[#e8efeb]" /></div>
        </div>
      </div>
    );
  }

  if (type === 'commerce') {
    return (
      <div className="h-full bg-[#fbf8f4] p-4">
        <div className="flex items-center justify-between text-[8px] font-semibold text-[#332922]"><span>FORM</span><span>Shop &nbsp; Objects &nbsp; About</span></div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex h-28 items-center justify-center rounded-lg bg-[#e8ded4]"><div className="h-16 w-12 rounded-t-full rounded-b-lg bg-[#b3623f] shadow-lg" /></div>
          <div className="pt-2"><p className="text-[8px] uppercase tracking-widest text-[#a56b4e]">New collection</p><p className="mt-2 text-lg font-medium leading-tight text-[#332922]">Objects for<br />slow living</p><div className="mt-4 h-px bg-[#bcb1a8]" /></div>
        </div>
      </div>
    );
  }

  if (type === 'wellness') {
    return (
      <div className="h-full bg-[#f0ede8] p-4">
        <div className="flex items-center justify-between text-[8px] font-semibold text-[#2e3834]"><span>Still</span><span>Practice &nbsp; Library</span></div>
        <div className="mt-4 rounded-xl bg-[#879b8f] p-4 text-white"><p className="text-[8px] text-white/70">TODAY'S PRACTICE</p><p className="mt-2 text-xl leading-tight">Make room<br />for quiet.</p><span aria-hidden="true" className="mt-4 flex size-7 items-center justify-center rounded-full bg-white text-[#53685d]"><Play className="size-3 fill-current" /></span></div>
      </div>
    );
  }

  if (type === 'studio') {
    return (
      <div className="h-full bg-[#17151f] p-4 text-white">
        <div className="flex items-center justify-between text-[8px]"><span className="font-bold">NORTH/03</span><span className="text-white/45">INDEX &nbsp; STUDIO</span></div>
        <div className="mt-5 grid grid-cols-[.8fr_1.2fr] gap-3"><p className="text-xl font-medium leading-none">Ideas in<br /><span className="text-violet-400">motion.</span></p><div className="h-28 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-400 to-orange-300 p-px"><div className="h-full rounded-[7px] bg-[#201b2a]/60" /></div></div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-[#eee9f8] p-3">
      <div className="h-full w-[42%] rounded-[20px] border-[3px] border-slate-900 bg-white p-2 shadow-xl">
        <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-slate-900" />
        <div className="rounded-xl bg-violet-600 p-2 text-white"><p className="text-[6px] text-white/70">Good morning</p><p className="mt-1 text-[10px] font-semibold">Your day, in focus.</p></div>
        <div className="mt-2 grid grid-cols-2 gap-1">{['Plan', 'Notes', 'Habits', 'Focus'].map((item) => <div key={item} className="rounded-md bg-violet-50 p-1.5 text-[6px] font-medium text-violet-900">{item}</div>)}</div>
      </div>
    </div>
  );
};

const featureCards = [
  { icon: WandSparkles, eyebrow: 'Explore more directions', title: 'Give the next idea a chance.', copy: 'Start with a rough brief or a question. Make the idea visible, try an alternative, and discover what is worth developing further.' },
  { icon: Figma, eyebrow: 'Keep it familiar', title: 'Make new ideas feel like your product.', copy: 'Bring your visual style into the exploration. Keep the experience recognisable so you can spend more attention on what it should do.' },
  { icon: GitBranch, eyebrow: 'See the whole journey', title: 'Find the missing moments.', copy: 'Look beyond the first screen. Connect the choices, next steps, and dead ends that shape the experience your customers will have.' },
  { icon: MousePointer2, eyebrow: 'Make feedback specific', title: 'Try it. Question it. Improve it.', copy: 'Walk through an interactive prototype and see where the experience falls short. Use what you learn to make the next revision more useful.' },
];

const galleryItems = [
  { title: 'Wanderlust travel landing page', tag: 'Web', type: 'travel' as const },
  { title: 'Personal finance dashboard', tag: 'Dashboard', type: 'finance' as const },
  { title: 'Editorial commerce store', tag: 'E-commerce', type: 'commerce' as const },
  { title: 'Mindfulness companion', tag: 'Mobile', type: 'wellness' as const },
  { title: 'Creative studio portfolio', tag: 'Portfolio', type: 'studio' as const },
  { title: 'Daily planning app', tag: 'Mobile', type: 'mobile' as const },
];

export default function HomePage() {
  const reduced = useReducedMotion();
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-slate-950 selection:bg-violet-200">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden border-b border-violet-100 bg-[#fdfcfe]">
          <div className="pointer-events-none absolute inset-0 hidden lg:block"><HeroIllustration /></div>
          <div className="pointer-events-none absolute -left-[170px] top-[100px] h-[480px] w-[1050px] opacity-40 lg:hidden"><HeroIllustration /></div>
          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-24 text-center md:pb-24 md:pt-28">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-200/70 bg-white px-3.5 py-2 text-[11px] font-medium tracking-wide text-violet-700">
                <span className="size-1.5 rounded-full bg-violet-500" /> A thinking space for product designers
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative mt-8">
              <h1 className="max-w-[830px] text-balance text-[52px] font-medium leading-[1.04] tracking-[-0.065em] text-[#231b35] sm:text-[68px] md:text-[86px]">
                Design the product<br className="hidden sm:block" /> you <span className="font-serif italic tracking-[-0.055em] text-violet-600">wish existed.</span>
              </h1>
              <svg viewBox="0 0 390 20" className="absolute -bottom-5 right-0 hidden h-5 w-[45%] text-violet-300 sm:block" fill="none" aria-hidden="true"><motion.path d="M4 13C80 0 260 0 384 9M35 19C172 8 260 11 353 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.5 }} /></svg>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-9 max-w-[520px] text-pretty text-base leading-7 text-[#797181] md:text-[17px]">Make your ideas tangible. Explore different directions, try the whole journey, and bring a clearer experience into your next review.</p>
            </Reveal>
            <Reveal delay={0.24}>
              <a href={DOWNLOAD_URL} className="group mt-8 inline-flex min-h-12 items-center gap-7 rounded-lg bg-violet-600 px-5 text-sm font-medium text-white shadow-[0_5px_0_#5b21b6,0_12px_28px_#7c3aed20] transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 motion-reduce:transform-none">
                Download AutoM8 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </Reveal>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs leading-6 text-slate-500"><span>Available for macOS.</span><a href={sitePath('/plans')} className="font-semibold text-violet-700 hover:text-violet-900">View plans</a></div>
          </div>
          <div className="relative mx-auto grid max-w-5xl grid-cols-2 border-t border-violet-100 px-5 md:grid-cols-4">
            {featureCards.map((feature, index) => <a key={feature.eyebrow} href={'#feature-' + index} className="group flex items-center justify-center gap-2.5 px-2 py-5 text-[11px] font-medium text-[#797181] transition hover:text-violet-600 md:py-7 md:text-xs"><feature.icon className="size-4 text-violet-400" />{feature.eyebrow}</a>)}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionIntro eyebrow="More room for your best thinking" title="Keep your design momentum." copy="Spend less time explaining what you imagine. Create something you can explore, question, and improve while the idea is still taking shape." />
          <div className="grid gap-6 md:grid-cols-2">
            {featureCards.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 2) * 0.08}>
                <article id={'feature-' + index} className="group h-full scroll-mt-24 overflow-hidden rounded-2xl border border-[#e9e4f0] bg-[#fdfcfe] transition-colors duration-300 hover:border-violet-300">
                  <div className="relative h-[250px] overflow-hidden border-b border-[#eee9f5] bg-[linear-gradient(#f6f3fa_1px,transparent_1px),linear-gradient(90deg,#f6f3fa_1px,transparent_1px)] bg-[size:24px_24px] px-5 transition-colors group-hover:bg-violet-50/40 md:h-[285px]">
                    <span className="absolute left-5 top-5 font-mono text-[10px] text-violet-400">0{index + 1} /</span>
                    <FeatureIllustration kind={index} />
                  </div>
                  <div className="p-7 md:p-9">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-600">{feature.eyebrow}</p>
                    <h3 className="mt-3 max-w-sm text-[27px] font-medium leading-tight tracking-[-0.035em] text-[#231b35]">{feature.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#797181]">{feature.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-8 rounded-2xl bg-[#282035] p-7 text-white md:grid-cols-[.85fr_1.15fr] md:p-12">
            <div className="flex flex-col justify-center">
              <div className="mb-7 flex size-11 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300"><MessageSquare className="size-5" /></div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Bring clarity to the next conversation</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Show what you mean.</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-400">Give the next person more than a description. Use a working example to explain your decisions, surface open questions, and make feedback easier to act on.</p>
              <div className="mt-7 space-y-3 text-sm text-slate-300">{['Make your thinking easier to understand', 'Review the journey alongside the screens', 'Keep the project in your own files'].map((item) => <div key={item} className="flex items-center gap-3"><span className="flex size-5 items-center justify-center rounded-full bg-violet-500/20 text-violet-300"><Check className="size-3" /></span>{item}</div>)}</div>
            </div>
            <div className="mt-8 flex min-h-[330px] flex-col justify-center overflow-hidden rounded-xl border border-violet-200 bg-[#f8f5ff] p-6 md:mt-0">
              <FeatureIllustration kind={3} />
              <p className="pb-2 text-center text-sm font-medium text-violet-800">One experience. A more useful conversation.</p>
            </div>
          </div>
        </section>

        <section id="inspiration" className="border-y border-violet-100 bg-[#f8f6fb] py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">A little inspiration</p><h2 className="text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">See where an idea can take you.</h2><p className="mt-4 max-w-xl text-base leading-7 text-slate-600">Example directions to spark your next exploration. Start with a customer problem and see how many useful ways there are to approach it.</p></div>
            <a href={DOWNLOAD_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900">Download AutoM8 <ArrowRight className="size-4" /></a>
            </div>
            <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item) => (
                <Reveal key={item.title}><article className="group">
                  <div className="aspect-[1.32] overflow-hidden rounded-xl border border-[#e4ddec] bg-white p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_#3b245014] motion-reduce:transform-none"><div className="h-full overflow-hidden rounded-md border border-slate-100"><BrowserBar label={item.title} /><div className="h-[calc(100%-40px)]"><GalleryPreview type={item.type} /></div></div></div>
                  <div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="text-sm font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-xs text-slate-500">Example prototype</p></div><span className="rounded-full border border-violet-100 bg-white px-2.5 py-1 text-[10px] font-semibold text-violet-700">{item.tag}</span></div>
                </article></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="relative overflow-hidden rounded-2xl bg-[#f5f1fc] px-6 py-20 text-center text-[#231b35] md:px-12 md:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-35"><HeroIllustration /></div>
            <div className="relative z-10"><Layers3 className="mx-auto mb-6 size-9 text-violet-200" /><h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Your next idea deserves a closer look.</h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#797181]">Make it tangible, see what you learn, and give your best thinking room to grow.</p><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={DOWNLOAD_URL} className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5">Download AutoM8 <ArrowRight className="size-4" /></a><a href={sitePath('/plans')} className="inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-800">View plans</a></div></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
