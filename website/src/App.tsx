import { ArrowRight, Check, MessageSquare, Compass, Eye, Layers3 } from 'lucide-react';
import HomePage from './HomePage';
import { PlansPage } from './InfoPages';
import { DocsPage } from './DocsPage';
import { DOWNLOAD_URL, sitePath, siteRoutePath, SiteFooter, SiteHeader } from './SiteChrome';
import { FeatureIllustration, HeroIllustration, Reveal } from './Illustrations';

const outcomes = [
  { icon: Eye, title: 'See the idea before you commit.', copy: 'A description leaves room for different interpretations. A working prototype gives everyone something concrete to explore and discuss.' },
  { icon: MessageSquare, title: 'Get feedback you can act on.', copy: 'Move the conversation from what people imagine to what they experience. Spot the missing step, the confusing choice, or the better direction.' },
  { icon: Compass, title: 'Make room for a better answer.', copy: 'Try a different approach while the idea is still easy to change. Carry what you learn into the next decision, before delivery gets underway.' },
];

const journey = [
  { number: '01', title: 'Choose one real use case.', copy: 'Start with a decision or customer journey that matters to one accountable team.', kind: 0 },
  { number: '02', title: 'Create a shared working rhythm.', copy: 'Use flows, prototypes, and reviews in a repeatable way the team can understand.', kind: 2 },
  { number: '03', title: 'Expand what proves useful.', copy: 'Use the pilot evidence to guide access, support, and the next teams to adopt AutoM8.', kind: 3 },
];

const uses = [
  { title: 'Explore a product direction.', copy: 'Bring an early idea to life before deciding how much time and effort to invest. Compare the experience with the problem you set out to solve.' },
  { title: 'Understand the customer journey.', copy: 'Walk through the whole experience, including choices and dead ends. Find the moments that need attention before they become expensive to change.' },
  { title: 'Make a client conversation concrete.', copy: 'Show how a proposed experience could work. Give clients a shared reference for their feedback and make the next conversation more specific.' },
  { title: 'Give the next team a clearer brief.', copy: 'Carry an interactive example alongside the requirements. Explain the intended behavior, open questions, and decisions with something people can inspect.' },
];

function BusinessLeadersPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-[#231b35] selection:bg-violet-200">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-violet-100 bg-[#fdfcfe] px-6 py-24 text-center md:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30"><HeroIllustration /></div>
          <Reveal className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">For business leaders</p>
            <h1 className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.055em] md:text-[78px]">Help your teams think<br /><span className="font-serif italic text-violet-700">with something real.</span></h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-600">Give product and design teams a faster way to turn open questions into experiences leaders can review. Start with one focused use case, prove the value, and grow adoption with evidence.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={sitePath('/plans#organizations')} className="inline-flex min-h-12 items-center gap-6 rounded-lg bg-violet-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600">See organization plans <ArrowRight className="size-4" /></a><a href={DOWNLOAD_URL} className="inline-flex min-h-12 items-center rounded-lg border border-violet-200 bg-white px-6 text-sm font-semibold text-violet-800">Download AutoM8</a></div>
            <p className="mt-5 text-xs leading-6 text-slate-500">Available for managed teams on macOS.</p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <Reveal className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Less guesswork. Better conversations.</p>
            <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.045em] md:text-5xl">Make decisions with something real.</h2>
            <p className="mt-6 text-base leading-7 text-slate-600">When an idea lives only in a document, everyone fills in the gaps differently. AutoM8 helps you bring those assumptions into the open.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((item, index) => <Reveal key={item.title} delay={index * 0.08}><article className="h-full rounded-2xl border border-violet-100 p-7"><item.icon className="size-6 text-violet-600" /><h3 className="mt-7 text-2xl font-medium tracking-[-0.03em]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p></article></Reveal>)}
          </div>
        </section>

        <section className="border-y border-violet-100 bg-[#fdfcfe] px-6 py-20">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Layers3 className="mx-auto size-8 text-violet-600" />
            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">A shared picture is a better place to start.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Bring design, product, and business conversations around the same experience. Spend the review discussing what works, what is missing, and what should happen next.</p>
          </Reveal>
        </section>

        <section id="rollout" className="scroll-mt-20 overflow-hidden border-b border-violet-100 bg-violet-50 px-6 py-24 md:py-28">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">A practical path to adoption</p>
            <h2 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-[-0.045em] text-slate-950 md:text-5xl">Start focused.<br className="hidden sm:block" /> Grow from evidence.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">Introduce AutoM8 around a real decision, give the team a simple working rhythm, and expand only after people can see where it saves time and improves the conversation.</p>
          </Reveal>
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {journey.map((step, index) => <Reveal key={step.number} delay={index * 0.1}><article className="relative h-full overflow-hidden rounded-2xl border border-violet-200 bg-white">
              <div className="h-52 border-b border-violet-100 px-4"><FeatureIllustration kind={step.kind} /></div>
              <div className="p-7"><p className="font-mono text-xs font-medium text-violet-700">{step.number}</p><h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.035em] text-slate-950">{step.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{step.copy}</p></div>
            </article></Reveal>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <Reveal className="mb-14 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Where it makes a difference</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] md:text-5xl">Useful before the big commitment.</h2></Reveal>
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">{uses.map((item) => <Reveal key={item.title}><article className="border-t border-violet-100 pt-7"><Check className="size-5 text-violet-600" /><h3 className="mt-5 text-2xl font-medium tracking-[-0.03em]">{item.title}</h3><p className="mt-4 max-w-lg text-base leading-7 text-slate-600">{item.copy}</p></article></Reveal>)}</div>
        </section>

        <section id="adopt" className="scroll-mt-24 px-6 pb-24">
          <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#f5f1fc] px-6 py-20 text-center md:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-20"><HeroIllustration /></div>
            <div className="relative"><h2 className="mx-auto max-w-3xl text-balance text-4xl font-medium tracking-[-0.045em] md:text-5xl">Give one team a better way to explore what comes next.</h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600">Download AutoM8, choose a focused pilot, and use the first review to decide how adoption should grow.</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={DOWNLOAD_URL} className="inline-flex min-h-12 items-center gap-5 rounded-lg bg-violet-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-violet-800">Download AutoM8 <ArrowRight className="size-4" /></a><a href={sitePath('/plans#organizations')} className="inline-flex min-h-12 items-center rounded-lg border border-violet-200 bg-white px-6 text-sm font-semibold text-violet-800">Organization plans</a></div><a href={sitePath('/docs')} className="mt-5 block text-sm font-medium text-violet-700 underline-offset-4 hover:underline">Read the managed product guide</a></div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  const pathname = siteRoutePath();
  if (pathname === '/for-business-leaders') return <BusinessLeadersPage />;
  if (pathname === '/docs' || pathname.startsWith('/docs/')) return <DocsPage />;
  if (pathname === '/plans') return <PlansPage />;
  return <HomePage />;
}
