'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section 
      className="min-h-screen bg-background flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-20 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Decorative vertical lines */}
      <div className="absolute left-0 top-0 h-full w-1/3 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full border-l border-foreground"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <h1 className="text-balance mb-8 md:mb-12 text-foreground">
            Your idea deserves more than a PowerPoint.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Transform your IT strategy into measurable business outcomes with expert consulting that bridges vision and execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
            >
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-medium"
            >
              Explore Our Work
            </Button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-20 pt-12 border-t border-border flex items-center justify-between gap-8">
          <div className="text-center flex-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Methodology
            </p>
            <p className="text-sm text-foreground">
              Standardization meets individualization for your unique challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
