import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Eye,
  Figma,
  FileDown,
  FolderOpen,
  GitBranch,
  Layers3,
  LayoutTemplate,
  MonitorDown,
  Search,
  Sparkles,
  UserRound,
  WandSparkles,
} from 'lucide-react'
import { DOWNLOAD_URL, sitePath, siteRoutePath, SiteFooter, SiteHeader } from './SiteChrome'

type DocSection = {
  heading: string
  body?: string
  steps?: string[]
  bullets?: string[]
  note?: string
}

type DocTopic = {
  slug: string
  group: 'Start' | 'Create' | 'Review and share' | 'Account'
  title: string
  description: string
  icon: typeof BookOpen
  sections: DocSection[]
}

const topics: DocTopic[] = [
  {
    slug: 'getting-started',
    group: 'Start',
    title: 'Getting started',
    description: 'Sign in, open the desktop app, and create your first project.',
    icon: WandSparkles,
    sections: [
      {
        heading: 'Before you begin',
        body: 'AutoM8 projects are created in the managed desktop app. Your account gives you access to managed generation, plans, usage, and team features.',
        bullets: ['An active AutoM8 account', 'AutoM8 for macOS', 'A folder where you want to keep the project'],
      },
      {
        heading: 'Create your first project',
        steps: [
          'Download and open AutoM8 on your Mac.',
          'Sign in with your managed AutoM8 account.',
          'Choose Start project, name the idea, and choose Responsive Website, Mobile App, or Presentation Deck.',
          'Select an empty folder. AutoM8 uses that folder as the project home.',
          'Describe the person, the problem, and the experience you want to explore.',
        ],
        note: 'Start with one useful journey. You can add more flows and screens after the first direction is clear.',
      },
    ],
  },
  {
    slug: 'account-and-access',
    group: 'Start',
    title: 'Account and access',
    description: 'Use your managed account to access AutoM8, plans, usage, and team features.',
    icon: UserRound,
    sections: [
      {
        heading: 'Your managed account',
        bullets: [
          'Use AutoM8 to create, open, generate, review, and export projects.',
          'Open Usage & Billing in AutoM8 to see current plans, buy a plan, add credits, and review usage.',
        ],
      },
      {
        heading: 'Sign in on desktop',
        steps: ['Open AutoM8.', 'Enter your managed account email and password.', 'Wait for the Projects view to appear before opening or creating work.'],
      },
      {
        heading: 'Reset a password',
        body: 'Select Forgot password on the sign-in screen after entering your email. Open the latest reset email and complete the change in your browser, then return to AutoM8.',
      },
    ],
  },
  {
    slug: 'projects',
    group: 'Create',
    title: 'Projects and saving',
    description: 'Understand project folders, saving, reopening, and safe ownership of your work.',
    icon: FolderOpen,
    sections: [
      {
        heading: 'Your project lives in its folder',
        body: 'The folder you choose contains the project flows, screens, visual settings, assets, and recoverable conversation history. It is the source of truth for that project.',
        bullets: ['Keep the folder together.', 'Use Open project when returning to an existing folder.', 'Wait for the Saved status before closing AutoM8 or building an export.'],
      },
      {
        heading: 'Open existing work',
        body: 'Choose a recent project from Projects, or use Open project to select its folder. AutoM8 reads the saved project before opening the canvas.',
      },
      {
        heading: 'Back up a project',
        body: 'Copy the complete project folder using your normal backup process after AutoM8 shows Saved. A recent-project entry is only a shortcut; the folder itself contains the work.',
      },
    ],
  },
  {
    slug: 'flows',
    group: 'Create',
    title: 'Plan a user flow',
    description: 'Map the journey before spending time refining individual screens.',
    icon: GitBranch,
    sections: [
      {
        heading: 'Start with the journey',
        body: 'A flow connects the moments someone moves through to complete a task. Use it to make the happy path, decisions, and recovery steps visible.',
        steps: ['State the person and goal.', 'Add the essential screens in order.', 'Add decisions only where the next step genuinely changes.', 'Check that every important path reaches a useful outcome.', 'Generate screens after the flow reads clearly.'],
      },
      {
        heading: 'Keep flows reviewable',
        bullets: ['Use short screen names that describe the moment.', 'Separate a different customer goal into another flow.', 'Include empty, error, and recovery moments when they affect the experience.'],
      },
    ],
  },
  {
    slug: 'screens',
    group: 'Create',
    title: 'Generate and refine screens',
    description: 'Turn flow moments into working screens and ask for focused changes.',
    icon: LayoutTemplate,
    sections: [
      {
        heading: 'Generate from the flow',
        body: 'Select a screen moment and ask AutoM8 to make it tangible. Generated screens follow the project context and selected visual direction.',
        steps: ['Select the screen you want to work on.', 'Describe the purpose, the important information, and the action someone should take.', 'Generate the screen and inspect the result on the canvas.', 'Ask for a focused change when a specific part needs attention.', 'Save before moving to a different project or building an export.'],
      },
      {
        heading: 'Give useful change requests',
        body: 'Describe the outcome you want and the part of the experience that is unclear. A focused request is easier to review than a broad instruction to redesign everything.',
        note: 'Example: “Make the delivery choice easier to compare and keep the primary action visible.”',
      },
    ],
  },
  {
    slug: 'design-systems',
    group: 'Create',
    title: 'Design systems',
    description: 'Give every generated screen a consistent visual foundation.',
    icon: Layers3,
    sections: [
      {
        heading: 'Choose a visual direction',
        body: 'A project design system keeps type, color, spacing, and common interface patterns coherent across screens. Choose a direction early enough to guide generation, but keep the customer journey as the main review focus.',
      },
      {
        heading: 'Review consistency',
        bullets: ['Check hierarchy before decorative details.', 'Use the same interaction pattern for the same kind of action.', 'Review connected screens together so the experience feels continuous.'],
      },
    ],
  },
  {
    slug: 'preview',
    group: 'Review and share',
    title: 'Preview and review',
    description: 'Walk through the working experience and find gaps while change is easy.',
    icon: Eye,
    sections: [
      {
        heading: 'Open a prototype',
        body: 'Choose Play after at least one screen has been generated. AutoM8 opens the current screen when one is selected; otherwise it opens the start of the active flow.',
      },
      {
        heading: 'Run a useful review',
        steps: ['Start from the first screen and complete the journey as the intended user.', 'Check what happens at each decision and dead end.', 'Write feedback against the exact moment where confusion appears.', 'Return to AutoM8, refine the relevant flow or screen, and preview again.'],
        note: 'Preview is for inspecting the experience. It does not make the project a publicly hosted website.',
      },
    ],
  },
  {
    slug: 'figma',
    group: 'Review and share',
    title: 'Send screens to Figma',
    description: 'Move selected screens into Figma when the project connection is available.',
    icon: Figma,
    sections: [
      {
        heading: 'Use the Figma handoff',
        body: 'Choose Send to Figma from the project header when the Figma connection is available. Follow the connection prompts, select what you want to send, and confirm the result in Figma.',
        steps: ['Save the latest project changes.', 'Open Send to Figma.', 'Connect the intended Figma file or destination.', 'Send the selected screens.', 'Open Figma and verify the transferred result before continuing there.'],
      },
      {
        heading: 'What to check',
        bullets: ['The intended screens were sent.', 'Typography and color remain recognizable.', 'The order and names make sense to the receiving team.'],
      },
    ],
  },
  {
    slug: 'export',
    group: 'Review and share',
    title: 'Build and export',
    description: 'Create a validated static prototype from the project’s saved revision.',
    icon: FileDown,
    sections: [
      {
        heading: 'Build before you export',
        steps: ['Make sure the project shows Saved.', 'Open Publish and choose Build prototype.', 'Wait for Build ready and review the number of validated routes.', 'Choose Preview exact export to inspect the built result.', 'Choose Export folder and select a destination.'],
      },
      {
        heading: 'About publishing',
        body: 'Static export is available. Public publishing, rollback, and unpublish remain unavailable unless AutoM8 administrators configure a hosting service. A successful build is not evidence that a public site is live.',
      },
    ],
  },
  {
    slug: 'plans-and-usage',
    group: 'Account',
    title: 'Plans, credits, and usage',
    description: 'Understand where to view access, current plan information, and managed usage.',
    icon: CreditCard,
    sections: [
      {
        heading: 'Use Usage & Billing in AutoM8',
        body: 'Start free with 100 one-time credits. Individual Pro is $24 per month or $259 annually with 1,500 monthly credits. Team is $79 per month or $849 annually with 5,000 pooled monthly credits for three members. Buy a plan or add credits from Usage & Billing through secure Stripe checkout.',
        bullets: ['Top up with 400 credits for $10, 1,000 credits for $20, or 3,000 credits for $55.', 'Additional team members are $24 per month each.', 'Check available credits before a larger generation task.', 'Ask a workspace owner when team access or allocation needs to change.'],
      },
      {
        heading: 'Managed generation',
        body: 'AutoM8 chooses and operates the managed generation service for account users. You work with the product task and your available balance; model and provider administration is not part of the customer workflow.',
      },
    ],
  },
  {
    slug: 'troubleshooting',
    group: 'Account',
    title: 'Troubleshooting',
    description: 'Resolve common sign-in, project, generation, preview, and export problems.',
    icon: CircleHelp,
    sections: [
      {
        heading: 'I cannot sign in',
        bullets: ['Confirm the account works on the AutoM8 website.', 'Use the same email on desktop.', 'If needed, request a new password-reset email and open the latest link.'],
      },
      {
        heading: 'A project will not open',
        bullets: ['Choose the project folder itself, not a file inside it.', 'Confirm the folder still exists and you can read it in Finder.', 'Use Open project if the recent-project shortcut is stale.'],
      },
      {
        heading: 'Play is unavailable',
        body: 'Generate at least one screen with non-empty content. Save the project, select that screen, and try Play again.',
      },
      {
        heading: 'Export is unavailable',
        body: 'Save the project and build the current revision first. Export becomes available only after the build is ready and no newer unsaved change exists.',
      },
      {
        heading: 'Generation stops or cannot continue',
        body: 'Check your account and available usage, preserve the project folder, and retry the focused request. Do not treat an interrupted response as a saved or completed screen until AutoM8 confirms it.',
      },
    ],
  },
]

const groups = ['Start', 'Create', 'Review and share', 'Account'] as const

function topicHref(slug: string) {
  return sitePath(`/docs/${slug}`)
}

function DocsNavigation({ currentSlug, onNavigate }: { currentSlug: string; onNavigate?: () => void }) {
  return (
    <nav aria-label="Documentation topics" className="space-y-7">
      {groups.map((group) => (
        <div key={group}>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{group}</p>
          <div className="space-y-1">
            {topics.filter((topic) => topic.group === group).map((topic) => (
              <a
                key={topic.slug}
                href={topicHref(topic.slug)}
                onClick={onNavigate}
                aria-current={currentSlug === topic.slug ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${currentSlug === topic.slug ? 'bg-violet-100 text-violet-800' : 'text-slate-600 hover:bg-violet-50 hover:text-violet-800'}`}
              >
                <topic.icon className="size-4 shrink-0" />
                {topic.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex gap-3 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm leading-6 text-violet-950">
      <Sparkles className="mt-0.5 size-4 shrink-0 text-violet-700" />
      <p>{children}</p>
    </div>
  )
}

function TopicArticle({ topic }: { topic: DocTopic }) {
  return (
    <article className="min-w-0">
      <a href={sitePath('/docs')} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 lg:hidden"><ArrowLeft className="size-4" />All documentation</a>
      <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><topic.icon className="size-5" /></div>
      <p className="mt-6 text-sm font-semibold text-violet-700">AutoM8 documentation</p>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">{topic.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{topic.description}</p>

      <div className="mt-12 space-y-12">
        {topic.sections.map((section) => (
          <section key={section.heading} className="scroll-mt-28 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">{section.heading}</h2>
            {section.body && <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{section.body}</p>}
            {section.steps && (
              <ol className="mt-5 max-w-3xl space-y-4">
                {section.steps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-base leading-7 text-slate-700">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}
            {section.bullets && (
              <ul className="mt-5 max-w-3xl space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-7 text-slate-700"><CheckCircle2 className="mt-1 size-4 shrink-0 text-violet-600" /><span>{bullet}</span></li>
                ))}
              </ul>
            )}
            {section.note && <Callout>{section.note}</Callout>}
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="text-xl font-semibold">Ready to continue?</h2><p className="mt-2 text-sm leading-6 text-slate-400">Open AutoM8 and apply this guide to your current project.</p></div>
        <a href={DOWNLOAD_URL} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950">Download AutoM8 <ArrowRight className="size-4" /></a>
      </div>
    </article>
  )
}

function DocsOverview() {
  return (
    <div>
      <div className="max-w-3xl">
        <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><BookOpen className="size-5" /></div>
        <p className="mt-6 text-sm font-semibold text-violet-700">AutoM8 documentation</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.045em] text-slate-950 md:text-6xl">From an idea to a working prototype.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">Learn the managed AutoM8 workflow: use your account for access and usage, then create, review, and export projects in the desktop app.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={DOWNLOAD_URL} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-700 px-4 text-sm font-semibold text-white hover:bg-violet-800"><MonitorDown className="size-4" />Download for macOS</a>
          <a href={sitePath('/plans')} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:border-violet-300">View plans <ArrowRight className="size-4" /></a>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">Start here</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {topics.slice(0, 4).map((topic) => (
            <a key={topic.slug} href={topicHref(topic.slug)} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-violet-300 hover:bg-violet-50/40">
              <topic.icon className="size-5 text-violet-600" />
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{topic.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">Read guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">Browse all topics</h2>
        <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {topics.map((topic) => (
            <a key={topic.slug} href={topicHref(topic.slug)} className="group flex items-start gap-4 p-5 hover:bg-violet-50/50 sm:items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><topic.icon className="size-5" /></span>
              <span className="min-w-0 flex-1"><span className="block font-semibold text-slate-950">{topic.title}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{topic.description}</span></span>
              <ArrowRight className="mt-3 size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 sm:mt-0" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export function DocsPage() {
  const currentSlug = siteRoutePath().replace(/^\/docs\/?/, '').split('/')[0]
  const currentTopic = topics.find((topic) => topic.slug === currentSlug)
  const [query, setQuery] = useState('')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return []
    return topics.filter((topic) => `${topic.title} ${topic.description} ${topic.group}`.toLowerCase().includes(normalized))
  }, [query])

  useEffect(() => {
    document.title = `${currentTopic?.title ?? 'Documentation'} — AutoM8`
  }, [currentTopic])

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-violet-200">
      <SiteHeader />
      <div className="border-b border-violet-100 bg-[#fdfcfe]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <a href={sitePath('/docs')} className="flex items-center gap-2 font-semibold"><BookOpen className="size-4 text-violet-700" />Documentation</a>
          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search documentation" placeholder="Search documentation" className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            {query && (
              <div className="absolute right-0 top-12 z-40 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                {results.length ? results.map((topic) => <a key={topic.slug} href={topicHref(topic.slug)} className="block border-b border-slate-100 px-4 py-3 last:border-0 hover:bg-violet-50"><span className="block text-sm font-semibold">{topic.title}</span><span className="mt-1 block text-xs text-slate-500">{topic.group}</span></a>) : <p className="px-4 py-4 text-sm text-slate-500">No matching topics.</p>}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:py-14">
        <div className="mb-8 lg:hidden">
          <button type="button" onClick={() => setMobileNavOpen((open) => !open)} aria-expanded={mobileNavOpen} className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 px-4 text-sm font-semibold">
            {currentTopic?.title ?? 'Browse documentation'} <ChevronDown className={`size-4 transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileNavOpen && <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3"><DocsNavigation currentSlug={currentSlug} onNavigate={() => setMobileNavOpen(false)} /></div>}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"><DocsNavigation currentSlug={currentSlug} /></div>
        </aside>
        <main className="min-w-0 pb-20">{currentTopic ? <TopicArticle topic={currentTopic} /> : <DocsOverview />}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
