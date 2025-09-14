import { ProfileSidebar } from "@/components/profile-sidebar"
import { MainContent } from "@/components/main-content"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex relative overflow-hidden">
      <BackgroundAnimation />
      <FloatingShapes />

      {/* Left Sidebar */}
      <ProfileSidebar />

      {/* Main Content */}
      <MainContent />
    </div>
  )
}
