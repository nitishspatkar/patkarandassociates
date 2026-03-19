import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { TrustStats } from '@/components/TrustStats'
import { About } from '@/components/About'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Patkar & Associates - IT Strategy Consulting',
  description: 'Translate your IT strategy into measurable business value. Expert consulting for mid-market enterprises.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <TrustStats />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  )
}
