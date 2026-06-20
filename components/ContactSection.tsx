"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Ready to collaborate on innovative projects? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-[var(--font-heading)]">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">p.krishnalokeshreddy@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1 bg-transparent" asChild>
                <a href="https://github.com/lokesh-poreddy" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1 bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/lokesh-reddy-poreddy-4a7a61275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
