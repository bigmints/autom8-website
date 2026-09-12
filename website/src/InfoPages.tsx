import { ArrowRight, Check, Layers3, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Reveal, HeroIllustration } from './Illustrations';
import { DOWNLOAD_URL, sitePath, SiteFooter, SiteHeader } from './SiteChrome';

const plans = [
  { id: undefined, name: 'AutoM8', eyebrow: 'Download the app', description: 'Start with the managed AutoM8 desktop experience and choose what fits from inside the app.', cta: 'Download for macOS', href: DOWNLOAD_URL, features: ['Create projects in folders you control', 'Map and generate working experiences', 'Preview the complete journey', 'See current purchase options in Usage & Billing'] },
  { id: undefined, name: 'Plus', eyebrow: 'For regular individual use', description: 'Choose Plus in AutoM8 when you are ready for a recurring managed-generation allowance.', cta: 'Download and choose Plus', href: DOWNLOAD_URL, featured: true, features: ['Monthly managed-generation credits', 'Optional one-time credit top-ups', 'Usage and balance visible in the app', 'Secure checkout handled by Stripe'] },
  { id: 'organizations', name: 'Organization', eyebrow: 'For team adoption', description: 'Introduce AutoM8 through a focused pilot, then grow access around what proves useful.', cta: 'Plan your adoption', href: sitePath('/for-business-leaders#rollout'), features: ['Start with one accountable team', 'Create a repeatable review rhythm', 'Manage team access and shared usage', 'Expand with evidence from real work'] },
];

export function PlansPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-violet-200">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#fdfcfe] px-5 py-20 text-center md:px-8 md:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-25"><HeroIllustration /></div><div className="mx-auto max-w-4xl"><div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700"><Layers3 className="size-6" /></div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">Plans</p><h1 className="mt-4 text-balance text-5xl font-medium tracking-[-0.055em] text-[#231b35] md:text-[72px]">Download. Explore. Choose what fits.</h1><p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">AutoM8 is a managed desktop app. Download it first, then open Usage & Billing to see current prices, buy a plan, or add credits.</p><a href={DOWNLOAD_URL} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-violet-700 px-6 text-sm font-semibold text-white">Download AutoM8 <ArrowRight className="size-4" /></a></div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Reveal key={plan.name}><article id={plan.id} className={`relative flex min-h-[520px] scroll-mt-28 flex-col rounded-xl border p-7 md:p-9 ${plan.featured ? 'border-violet-300 bg-violet-600 text-white shadow-[0_24px_70px_rgba(91,33,182,0.18)]' : 'border-slate-200 bg-white'}`}>
                {plan.featured && <span className="absolute right-6 -top-3 rounded-full bg-violet-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Individual plan</span>}
                <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${plan.featured ? 'text-violet-200' : 'text-violet-600'}`}>{plan.eyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">{plan.name}</h2><p className={`mt-4 min-h-20 leading-7 ${plan.featured ? 'text-violet-100' : 'text-slate-600'}`}>{plan.description}</p>
                <div className={`my-7 h-px ${plan.featured ? 'bg-white/15' : 'bg-slate-200'}`} />
                <ul className="space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-white/15 text-white' : 'bg-violet-50 text-violet-700'}`}><Check className="size-3" /></span>{feature}</li>)}</ul>
                <a href={plan.href} className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${plan.featured ? 'bg-white text-violet-700' : 'bg-slate-950 text-white'}`}>{plan.cta} <ArrowRight className="size-4" /></a>
              </article></Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: 'Keep your work close', copy: 'Create and save projects in folders you control.' }, { icon: Users, title: 'Make reviews more useful', copy: 'Give designers, product partners, and stakeholders a concrete experience to discuss.' }, { icon: Sparkles, title: 'Start with one idea', copy: 'Explore a focused question and add detail as you learn what matters.' }].map((item) => <div key={item.title} className="rounded-2xl bg-[#faf9ff] p-6"><item.icon className="size-5 text-violet-700" /><h3 className="mt-5 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p></div>)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
