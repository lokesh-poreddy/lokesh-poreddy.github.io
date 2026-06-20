"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "StockSense AI",
      description:
        "AI-powered stock market prediction system using machine learning algorithms to analyze market trends and provide intelligent investment insights.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/lokesh-poreddy/StockSense-AI",
    },
    {
      title: "Metal Detection Rover",
      description:
        "Autonomous rover with digital twin technology and LiDAR-based detection system for precise metal detection and mapping.",
      tech: ["Arduino", "Python", "3D Modeling", "IoT"],
      github: "https://github.com/lokesh-poreddy/Metal-Detection-Rover",
    },
    {
      title: "PlaySpot - Playground Booking",
      description:
        "Comprehensive web application for playground slot booking with GPS tracking, weather prediction, and real-time availability.",
      tech: ["Next.js", "Node.js", "MongoDB", "Maps API"],
      github: "https://github.com/lokesh-poreddy/PlaySpot---Playground-Booking",
    },
    {
      title: "AI Chess Master",
      description:
        "Advanced AI-driven chess engine with intelligent move predictions and strategic analysis using deep learning algorithms.",
      tech: ["Python", "PyTorch", "React", "WebSocket"],
      github: "https://github.com/lokesh-poreddy/AI_Chess_Master",
    },
    {
      title: "Vivasaayi",
      description:
        "Smart agriculture assistant for farmers providing crop recommendations, weather insights, and farming optimization tips.",
      tech: ["React Native", "Python", "ML", "IoT Sensors"],
      github: "https://github.com/lokesh-poreddy/Vivasaayi",
    },
    {
      title: "AI Traffic Management System",
      description:
        "Intelligent traffic management system that prioritizes emergency vehicles using computer vision and real-time traffic analysis.",
      tech: ["OpenCV", "Python", "React", "IoT"],
      github: "https://github.com/lokesh-poreddy/AI-Traffic-Management-System-to-all-emergency-vehicles",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto font-medium">
            A showcase of innovative projects combining AI, IoT, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="text-xl font-[var(--font-heading)] group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/80 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
