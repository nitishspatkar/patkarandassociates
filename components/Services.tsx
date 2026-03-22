'use client'

interface ServiceItemProps {
  pattern: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ pattern, title, description }: ServiceItemProps) {
  return (
    <div className="p-6 md:p-8 border border-border hover:border-foreground/30 transition-colors">
      <div className="mb-6 h-16 flex items-center justify-start">{pattern}</div>
      <h3 className="text-xl md:text-2xl mb-3 text-foreground font-semibold">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// SVG Pattern Components
function PatternArrows() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="35,19 40,24 35,29" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="32,19 27,24 32,29" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PatternNodes() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <circle cx="24" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="24" r="3" fill="currentColor" />
      <circle cx="36" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="36" r="3" fill="currentColor" />
      <line x1="24" y1="12" x2="12" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="24" y1="12" x2="36" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="24" x2="24" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="36" y1="24" x2="24" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function PatternWaves() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <path d="M 8 28 Q 14 18, 20 28 T 32 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 8 20 Q 14 10, 20 20 T 32 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 8 36 Q 14 26, 20 36 T 32 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function PatternGrid() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <rect x="8" y="8" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="8" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="8" y="24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="24" y="24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function PatternTeam() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <circle cx="24" cy="16" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="28" r="3.5" fill="currentColor" opacity="0.6" />
      <circle cx="34" cy="28" r="3.5" fill="currentColor" opacity="0.6" />
      <path d="M 24 20 Q 16 24 12 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M 24 20 Q 32 24 36 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M 14 31.5 L 34 31.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function PatternShield() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-foreground">
      <path d="M 24 10 L 12 16 L 12 26 Q 12 34 24 38 Q 36 34 36 26 L 36 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="20" y1="24" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="28" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const services = [
  {
    pattern: <PatternArrows />,
    title: 'Agile Transition',
    description: 'Accelerate your digital transformation with proven agile methodologies tailored to your organization.',
  },
  {
    pattern: <PatternNodes />,
    title: 'Innovation Conceptualization',
    description: 'Turn strategic vision into actionable innovation roadmaps that drive competitive advantage.',
  },
  {
    pattern: <PatternWaves />,
    title: 'Process Optimization',
    description: 'Streamline operations and maximize efficiency through data-driven process improvements.',
  },
  {
    pattern: <PatternGrid />,
    title: 'Technology Stack Review',
    description: 'Evaluate and modernize your tech infrastructure for scalability and performance.',
  },
  {
    pattern: <PatternTeam />,
    title: 'Organizational Alignment',
    description: 'Ensure teams, tools, and strategies work in perfect harmony toward shared objectives.',
  },
  {
    pattern: <PatternShield />,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate IT risks before they impact your business continuity.',
  },
]

export function Services() {
  return (
    <section className="bg-background px-4 md:px-8 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-balance text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive consulting solutions designed for mid-market enterprises seeking transformative results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              pattern={service.pattern}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
