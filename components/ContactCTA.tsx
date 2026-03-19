'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import { useToast } from '@/hooks/use-toast'

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    challenge: '',
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.challenge) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: 'Submission received',
      description: 'We will be in touch within 24 hours.',
    })

    setFormData({
      name: '',
      company: '',
      email: '',
      challenge: '',
    })
    setLoading(false)
  }

  return (
    <section className="bg-accent text-accent-foreground px-4 md:px-8 lg:px-16 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-balance mb-4">
            Ready to transform your IT strategy?
          </h2>
          <p className="text-lg opacity-90">
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-accent/20 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="bg-accent/20 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-accent/20 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              What's your main IT challenge? *
            </label>
            <Textarea
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Tell us about your current IT challenges..."
              rows={5}
              className="bg-accent/20 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium"
          >
            {loading ? (
              <>
                <Spinner className="mr-2 h-4 w-4" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>

          <p className="text-xs text-center opacity-75">
            We respect your privacy. Your information will only be used to contact you about your inquiry.
          </p>
        </form>
      </div>
    </section>
  )
}
