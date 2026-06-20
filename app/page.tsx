import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import AchievementsSection from "@/components/AchievementsSection"
import FunAnimationSection from "@/components/FunAnimationSection"
import ContactSection from "@/components/ContactSection"
import SpatialBackground from "@/components/SpatialBackground"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpatialBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <FunAnimationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2026 Poreddy Lokesh Reddy
          </p>
        </div>
      </footer>
    </div>
  )
}
