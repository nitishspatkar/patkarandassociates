const services = [
  {
    title: 'Agile Transformation',
    description:
      "Most teams don't fail because they lack talent. They fail because their processes can't keep up. We guide organizations through the messy, real work of becoming adaptive - from rituals to culture.",
    icon: 'triangle',
  },
  {
    title: 'Innovation Conceptualization',
    description:
      "A bold idea that never gets tested is just a risk you're carrying. We translate raw innovation into structured concepts that reduce adoption risk before a single line of code is written.",
    icon: 'square',
  },
  {
    title: 'Innovation Project Continuity',
    description:
      "You ran a funded project. It worked. Now what? We maintain and operate the outcomes of Innosuisse and similar programs for companies that don't have an IT setup to take it further.",
    icon: 'bars',
  },
  {
    title: 'Rapid Prototyping',
    description:
      "We compress months into weeks. From validated concept to working prototype - fast enough to show investors, clients, or your own team that it's real.",
    icon: 'diamond',
  },
  {
    title: 'Data-Driven Insights',
    description:
      "The data your business generates every day is already telling you what to fix. We extract the signal from the noise and turn it into decisions you can act on.",
    icon: 'dots',
  },
  {
    title: 'Agentic AI Automation',
    description:
      'Not bots. Not scripts. We deploy autonomous AI agents that handle complex, multi-step workflows - so your team focuses on what only humans can do.',
    icon: 'grid',
  },
]

const workProjects = [
  { name: 'Project Helix', category: 'Rapid Prototype · MedTech' },
  { name: 'Project Volta', category: 'Digital Platform · Industry' },
  { name: 'Project Meridian', category: 'Agentic AI · Operations' },
]

const domains = [
  { name: 'Digital Transformation', stat: '14+ Years' },
  { name: 'Applied AI', stat: '40+ Projects' },
  { name: 'Process Engineering', stat: '60+ Engagements' },
  { name: 'Innovation Strategy', stat: '20+ Programs' },
]

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'triangle':
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 3 18 17H2L10 3Z" fill="currentColor" />
        </svg>
      )
    case 'square':
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'bars':
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 5h12M4 10h8M4 15h12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'diamond':
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 2 18 10 10 18 2 10 10 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'dots':
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="5" cy="10" r="1.8" fill="currentColor" />
          <circle cx="10" cy="10" r="1.8" fill="currentColor" />
          <circle cx="15" cy="10" r="1.8" fill="currentColor" />
        </svg>
      )
    default:
      return (
        <svg className="h-5 w-5 text-neutral-900" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="3" y="3" width="5" height="5" fill="currentColor" />
          <rect x="12" y="3" width="5" height="5" fill="currentColor" />
          <rect x="3" y="12" width="5" height="5" fill="currentColor" />
          <rect x="12" y="12" width="5" height="5" fill="currentColor" />
        </svg>
      )
  }
}

export default function Home() {
  return (
    <main className="bg-white text-[#0A0A0A]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-4 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="text-sm font-semibold tracking-tight text-white">
              Patkar &amp; Associates
            </a>
            <div className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-neutral-300">
              🇨🇭 Engineered in Switzerland
            </div>
          </div>
          <nav className="mt-3 flex justify-end gap-5 text-[10px] uppercase tracking-[0.16em] text-neutral-300 md:text-xs lg:gap-7">
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
        <div className="mx-auto grid min-h-screen w-full max-w-[1240px] grid-cols-12 gap-6 px-6 pb-10 lg:px-10">
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

      <section id="services" className="border-t border-neutral-200 bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">What we do</p>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border border-neutral-300 bg-[#F5F4F0] p-6">
                <div className="mb-5 inline-flex h-9 w-9 items-center justify-center border border-neutral-300 bg-white">
                  <ServiceIcon type={service.icon} />
                </div>
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-neutral-300 bg-[#F5F4F0] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
          <div className="mb-10 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">Selected Work</p>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workProjects.map((project) => (
              <article key={project.name} className="border border-neutral-300 bg-white p-4">
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
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-12 gap-8 px-6 lg:px-10">
          <div className="col-span-12 md:col-span-7">
            <h2 className="max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.03em] md:text-5xl">
              Senior expertise. No junior filler.
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
              We operate through an associate model built for precision. Every engagement is led by experienced consultants who
              have delivered in regulated industries, high-growth ventures, and public innovation programs.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Our background combines research depth with execution in industry. That means strategy is always tied to real
              implementation constraints, measurable outcomes, and continuity after delivery.
            </p>
          </div>
          <div className="col-span-12 border-t border-neutral-300 pt-6 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <ul className="space-y-4">
              {domains.map((domain) => (
                <li key={domain.name} className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                  <span className="text-sm font-medium">{domain.name}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-neutral-600">{domain.stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/15 bg-[#0A0A0A] py-20 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-12 gap-10 px-6 lg:px-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.03em] md:text-5xl">What&apos;s your challenge?</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-400 md:text-base">
              No pitch. No retainer. Just a conversation about your problem.
            </p>
          </div>
          <form className="col-span-12 space-y-4 md:col-span-6">
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
