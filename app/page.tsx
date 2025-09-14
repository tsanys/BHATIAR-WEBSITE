import { ProfileSidebar } from "@/components/profile-sidebar"
import { MainContent } from "@/components/main-content"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row relative overflow-hidden">
      <BackgroundAnimation />
      <FloatingShapes />

      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <ProfileSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  )
}
