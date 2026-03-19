'use client'

export function TrustStats() {
  const stats = [
    {
      number: '300+',
      label: 'Projects Delivered',
    },
    {
      number: '150+',
      label: 'Enterprise Clients',
    },
    {
      number: '2.5x',
      label: 'Average ROI Delivered',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
    },
  ]

  return (
    <section className="bg-secondary px-4 md:px-8 lg:px-16 py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
