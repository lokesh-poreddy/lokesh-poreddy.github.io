"use client"
import { Card } from "@/components/ui/card"
import { Code, Brain, Cpu, Globe } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { icon: Code, title: "Full Stack Development", desc: "React, Next.js, Node.js, Python" },
    { icon: Brain, title: "AI & Machine Learning", desc: "TensorFlow, PyTorch, Computer Vision" },
    { icon: Cpu, title: "IoT & Hardware", desc: "Arduino, Raspberry Pi, Sensors" },
    { icon: Globe, title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">About Me</h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            I am a Full Stack Developer specializing in AI-driven systems, IoT, and web applications. I enjoy solving
            real-world problems through innovative projects that combine AI, cloud, and hardware integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-foreground/80 font-medium">{skill.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
