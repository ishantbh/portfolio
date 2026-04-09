import { ContactForm } from "@/components/contact-form"
import { SocialIcons } from "@/components/social-icons"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-2 text-muted-foreground">Get in touch with me</p>
        </div>

        <SocialIcons />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}
