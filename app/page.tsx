'use client'

import {
  MapIcon,
  Cog6ToothIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  PresentationChartBarIcon,
  ArrowPathIcon,
  PlayIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const servicesAiEngineering = [
  {
    title: 'AI Strategy & Readiness',
    description:
      "Before building, you need clarity. We help organisations assess where AI creates real value, what's feasible today, and how to sequence adoption so investment lands where it matters.",
    icon: MapIcon,
  },
  {
    title: 'Agentic AI Automation',
    description:
      'We build broader AI transformation programs, from practical automations to reusable toolchains that speed up internal workflows. The goal is measurable throughput gains, not isolated demos.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'AI Product Integration',
    description:
      'We embed AI directly into your existing products — copilots, document intelligence, chat interfaces — with full observability, guardrails, and handoff to your engineering team.',
    icon: PuzzlePieceIcon,
  },
]

const servicesStrategyExecution = [
  {
    title: 'Innovation Conceptualization',
    description:
      "A bold idea that never gets tested is just a risk you're carrying. We translate raw innovation into structured concepts that reduce adoption risk before a single line of code is written.",
    icon: LightBulbIcon,
  },
  {
    title: 'Rapid Prototyping',
    description:
      "We compress months into weeks. From validated concept to working prototype — fast enough to show investors, clients, or your own team that it's real.",
    icon: RocketLaunchIcon,
  },
  {
    title: 'Data-Driven Insights',
    description:
      'We design decision systems around your operational and product data. From instrumentation to dashboards and forecasting, we turn fragmented signals into clear next actions.',
    icon: PresentationChartBarIcon,
  },
  {
    title: 'Agile Transformation',
    description:
      "Most teams don't fail because they lack talent. They fail because their processes can't keep up. We guide organizations through the messy, real work of becoming adaptive — from rituals to culture.",
    icon: ArrowPathIcon,
  },
  {
    title: 'Innovation Project Continuity',
    description:
      'When a funded innovation project proves its value, momentum should not stall. We provide structured handover, operations support, and ongoing technical ownership so outcomes keep delivering.',
    icon: PlayIcon,
  },
  {
    title: 'Digital Sustainable Strategy',
    description:
      'Sustainability is multi-dimensional. Using the SuSAF framework, we help organisations evaluate and design digital initiatives across technical, environmental, economic, and social dimensions — not just green IT.',
    icon: GlobeAltIcon,
  },
]

const workProjects = [
  { name: 'Project Helix', category: 'Rapid Prototype · MedTech' },
  { name: 'Project Volta', category: 'Digital Platform · Industry' },
  { name: 'Project Meridian', category: 'Agentic AI · Operations' },
]

const domains = [
  { name: 'Digital Transformation', stat: '10+ Years' },
  { name: 'Applied AI', stat: '10+ Projects' },
  { name: 'Innovation Strategy', stat: '15+ Projects' },
  { name: 'Applied Research and Innovation', stat: '10+ Years' },
]

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <article className="rounded-md border border-neutral-300 bg-[#F5F4F0] p-6">
      <div className="mb-5">
        <Icon className="h-10 w-10 text-neutral-900" />
      </div>
      <h2 className="text-xl font-semibold tracking-[-0.02em]">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{description}</p>
    </article>
  )
}

export default function Home() {
  return (
    <main className="bg-white text-[#0A0A0A]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-4 lg:px-10">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <a href="#top" className="text-xs md:text-sm font-semibold tracking-tight text-white">
              Patkar &amp; Associates
            </a>
            <div className="flex-shrink-0 rounded-full border border-white/20 px-2 md:px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-neutral-300 whitespace-nowrap">
              🇨🇭 Switzerland
            </div>
          </div>
          <nav className="mt-3 flex justify-end gap-3 md:gap-5 text-[10px] uppercase tracking-[0.16em] text-neutral-300 md:text-xs lg:gap-7">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="bg-[#0A0A0A] pt-32 text-white md:pt-36">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-12 gap-6 px-6 pb-10 lg:px-10">
          <div className="col-span-12 flex flex-col justify-center pt-14 md:col-span-10">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Your innovation deserves
              <br />
              more than a slide deck.
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
              We engineer ideas from concept to working system - for companies that cannot afford to slow down.
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center border border-white px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
              >
                Tell us your challenge →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-neutral-200 bg-[#F5F4F0] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
          <div className="mb-12 flex items-center gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-900">What we do</p>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          <div className="space-y-14">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">AI Engineering</p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {servicesAiEngineering.map((service) => (
                  <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">Strategy &amp; Execution</p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {servicesStrategyExecution.map((service) => (
                  <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-neutral-300 bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Selected Work</p>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workProjects.map((project) => (
              <article key={project.name} className="rounded-md border border-neutral-300 bg-[#F5F4F0] p-4">
                <div className="aspect-[16/10] w-full border border-neutral-300 bg-neutral-700" />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">{project.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-neutral-600">{project.category}</p>
                <a href="#contact" className="mt-5 inline-block text-sm text-neutral-900 transition-opacity hover:opacity-70">
                  Explore project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-300 bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-10">
          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
              Every innovation project is a leap. We make sure it&apos;s a calculated one.
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
              The best ideas are often the least obvious ones. We work with organisations on projects that are novel enough to be
              exciting and unclear enough to be hard. We figure it out together — methodically, quickly, and without pretending
              the uncertainty isn&apos;t there.
            </p>
          </div>
          <div className="border-t border-neutral-300 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <ul className="space-y-4">
              {domains.map((domain) => (
                <li key={domain.name} className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-neutral-200 pb-3 gap-2">
                  <span className="text-sm font-medium">{domain.name}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-neutral-600">{domain.stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/15 bg-[#0A0A0A] py-20 text-white md:py-24">
        <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-10">
          <div>
            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.03em] md:text-5xl">What&apos;s your challenge?</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-400 md:text-base">
              No pitch. No retainer. Just a conversation about your problem.
            </p>
          </div>
          <form className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-neutral-400">Name</span>
              <input
                type="text"
                className="w-full border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-neutral-400">Company</span>
              <input
                type="text"
                className="w-full border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                placeholder="Your company"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-neutral-400">Email</span>
              <input
                type="email"
                className="w-full border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                placeholder="name@company.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-neutral-400">Describe your challenge</span>
              <textarea
                rows={4}
                className="w-full border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white"
                placeholder="Context, goals, and constraints."
              />
            </label>
            <button
              type="submit"
              className="inline-flex border border-white px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
            >
              Submit
            </button>
            <p className="pt-1 text-[10px] uppercase tracking-[0.08em] text-neutral-500">
              Your data is handled per Swiss privacy law.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-300 bg-white py-5">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-12 items-center gap-4 px-6 text-[11px] uppercase tracking-[0.12em] text-neutral-700 lg:px-10">
          <p className="col-span-12 md:col-span-4">© 2026 Patkar &amp; Associates</p>
          <div className="col-span-12 md:col-span-4 md:justify-self-center">
            <a href="#" className="transition-opacity hover:opacity-65">
              Privacy Policy
            </a>{' '}
            ·{' '}
            <a href="#" className="transition-opacity hover:opacity-65">
              Imprint
            </a>
          </div>
          <a
            href="#"
            aria-label="LinkedIn"
            className="col-span-12 inline-flex h-7 w-7 items-center justify-center border border-neutral-400 md:col-span-4 md:justify-self-end"
          >
            <svg className="h-3.5 w-3.5 text-neutral-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.06 2.06 0 1 0 5.3 7.12 2.06 2.06 0 0 0 5.25 3ZM20.44 13.4c0-3.47-1.85-5.09-4.33-5.09a3.73 3.73 0 0 0-3.36 1.85V8.5H9.37V20h3.38v-6.12c0-1.61.3-3.17 2.3-3.17 1.97 0 2 1.84 2 3.28V20h3.38v-6.6Z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}
