'use client'

export function About() {
  return (
    <section className="bg-background px-4 md:px-8 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-balance text-foreground mb-8">
              Why partner with us?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that successful IT strategy isn't about the latest technologies—it's about aligning them with your business reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience across diverse industries, we've learned that every transformation is unique. Our consultants don't just advise—we partner with you to navigate complexity and drive measurable results.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Hands-On Mentality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We roll up our sleeves and work alongside your teams to implement solutions, not just deliver recommendations.
              </p>
            </div>

            <div className="pb-8 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Results-Focused
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement is measured against clear KPIs and business outcomes that matter to your bottom line.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Industry Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep sector knowledge combined with cross-industry best practices to accelerate your transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
