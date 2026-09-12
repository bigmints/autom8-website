import { ArrowRight, Check, Layers3, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Reveal, HeroIllustration } from './Illustrations';
import { DOWNLOAD_URL, sitePath, SiteFooter, SiteHeader } from './SiteChrome';

const plans = [
  { id: undefined, name: 'Free', eyebrow: 'Explore AutoM8', price: '$0', cadence: 'forever', allowance: '100 credits once', description: 'Try the complete product workflow and turn your first idea into something you can review.', cta: 'Download for macOS', href: DOWNLOAD_URL, features: ['One personal workspace', 'Create flows and working screens', 'Preview the complete journey', 'Export projects when they are ready'] },
  { id: undefined, name: 'Individual Pro', eyebrow: 'For regular individual use', price: '$24', cadence: 'per month', annual: '$259 billed annually', allowance: '1,500 credits every month', description: 'A dependable monthly allowance for designers who use AutoM8 as part of their regular work.', cta: 'Download and choose Pro', href: DOWNLOAD_URL, featured: true, features: ['Personal workspace', 'Monthly managed-generation credits', 'Optional one-time credit top-ups', 'Usage and balance visible in the app'] },
  { id: 'organizations', name: 'Team', eyebrow: 'For up to 3 members', price: '$79', cadence: 'per month', annual: '$849 billed annually', allowance: '5,000 pooled credits every month', description: 'Bring one focused team into AutoM8 with shared usage, clear roles, and room to expand.', cta: 'Plan your adoption', href: sitePath('/for-business-leaders#rollout'), features: ['Three members included', 'Shared organization workspace', 'Pooled credits and member allocations', 'Additional members at $24 per month'] },
];

const topUps = [
  { name: 'Starter', price: '$10', credits: '400 credits' },
  { name: 'Standard', price: '$20', credits: '1,000 credits', featured: true },
  { name: 'Studio', price: '$55', credits: '3,000 credits' },
];

export function PlansPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-violet-200">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#fdfcfe] px-5 py-20 text-center md:px-8 md:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-25"><HeroIllustration /></div><div className="mx-auto max-w-4xl"><div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700"><Layers3 className="size-6" /></div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">Simple pricing</p><h1 className="mt-4 text-balance text-5xl font-medium tracking-[-0.055em] text-[#231b35] md:text-[72px]">Start free. Grow when the work does.</h1><p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">Begin with 100 credits, then choose a plan for your own work or bring a team together around a shared monthly allowance.</p><a href={DOWNLOAD_URL} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-violet-700 px-6 text-sm font-semibold text-white">Download AutoM8 <ArrowRight className="size-4" /></a></div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Reveal key={plan.name}><article id={plan.id} className={`relative flex min-h-[610px] scroll-mt-28 flex-col rounded-xl border p-7 md:p-9 ${plan.featured ? 'border-violet-300 bg-violet-600 text-white shadow-[0_24px_70px_rgba(91,33,182,0.18)]' : 'border-slate-200 bg-white'}`}>
                {plan.featured && <span className="absolute right-6 -top-3 rounded-full bg-violet-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Most popular</span>}
                <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${plan.featured ? 'text-violet-200' : 'text-violet-600'}`}>{plan.eyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">{plan.name}</h2>
                <div className="mt-7 flex items-end gap-2"><span className="text-5xl font-semibold tracking-[-0.05em]">{plan.price}</span><span className={`pb-1 text-sm ${plan.featured ? 'text-violet-200' : 'text-slate-500'}`}>{plan.cadence}</span></div>
                <p className={`mt-2 min-h-6 text-sm font-medium ${plan.featured ? 'text-violet-100' : 'text-violet-700'}`}>{plan.annual ?? 'No card required'}</p>
                <p className={`mt-6 rounded-xl px-4 py-3 text-sm font-semibold ${plan.featured ? 'bg-white/10 text-white' : 'bg-violet-50 text-violet-800'}`}>{plan.allowance}</p>
                <p className={`mt-5 min-h-20 leading-7 ${plan.featured ? 'text-violet-100' : 'text-slate-600'}`}>{plan.description}</p>
                <div className={`my-7 h-px ${plan.featured ? 'bg-white/15' : 'bg-slate-200'}`} />
                <ul className="space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-white/15 text-white' : 'bg-violet-50 text-violet-700'}`}><Check className="size-3" /></span>{feature}</li>)}</ul>
                <a href={plan.href} className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${plan.featured ? 'bg-white text-violet-700' : 'bg-slate-950 text-white'}`}>{plan.cta} <ArrowRight className="size-4" /></a>
              </article></Reveal>
            ))}
          </div>
          <section className="mt-20 border-t border-slate-200 pt-16">
            <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Need more room?</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">Add credits when you need them.</h2><p className="mt-4 leading-7 text-slate-600">Top-ups are one-time purchases available from Usage & Billing inside AutoM8.</p></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {topUps.map((topUp) => <article key={topUp.name} className={`rounded-2xl border p-6 text-center ${topUp.featured ? 'border-violet-300 bg-violet-50' : 'border-slate-200 bg-white'}`}><p className="text-sm font-semibold text-violet-700">{topUp.name}</p><p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{topUp.price}</p><p className="mt-2 text-sm text-slate-600">{topUp.credits}</p></article>)}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-500">Credit usage varies with the work you create. Current balance and purchase history stay visible in Usage & Billing.</p>
          </section>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: 'Keep your work close', copy: 'Create and save projects in folders you control.' }, { icon: Users, title: 'Make reviews more useful', copy: 'Give designers, product partners, and stakeholders a concrete experience to discuss.' }, { icon: Sparkles, title: 'Start with one idea', copy: 'Explore a focused question and add detail as you learn what matters.' }].map((item) => <div key={item.title} className="rounded-2xl bg-[#faf9ff] p-6"><item.icon className="size-5 text-violet-700" /><h3 className="mt-5 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p></div>)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
