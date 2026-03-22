'use client'

import { 
  ArrowRight, 
  Lightbulb, 
  Zap, 
  Code2, 
  Users, 
  Shield 
} from 'lucide-react'

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="p-6 md:p-8 border border-border hover:border-foreground/30 transition-colors">
      <div className="mb-4 text-foreground">{icon}</div>
      <h3 className="text-xl md:text-2xl mb-3 text-foreground font-semibold">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

const services = [
  {
    icon: <ArrowRight className="w-8 h-8" />,
    title: 'Agile Transition',
    description: 'Accelerate your digital transformation with proven agile methodologies tailored to your organization.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation Conceptualization',
    description: 'Turn strategic vision into actionable innovation roadmaps that drive competitive advantage.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Process Optimization',
    description: 'Streamline operations and maximize efficiency through data-driven process improvements.',
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Technology Stack Review',
    description: 'Evaluate and modernize your tech infrastructure for scalability and performance.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Organizational Alignment',
    description: 'Ensure teams, tools, and strategies work in perfect harmony toward shared objectives.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
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
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
