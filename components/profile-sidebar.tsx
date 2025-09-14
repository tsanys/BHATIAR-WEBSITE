import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, MessageCircle, Coffee } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="w-80 xl:w-96 p-4 lg:p-6 flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full p-4 lg:p-6 bg-card border-border/50 shadow-lg">
        {/* Profile Image with Green Background */}
        <div className="relative mb-4 lg:mb-6">
          <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-3 lg:p-4 relative overflow-hidden">
            {/* Profile Image */}
            <div className="absolute inset-3 lg:inset-4 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/professional-developer-in-hoodie.jpg"
                alt="Bhatiar Azhari Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-1">Bhatiar Azhari</h2>
          <p className="text-green-600 font-mono text-xs lg:text-sm font-semibold">NET_ENG</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-2 lg:gap-3 mb-4 lg:mb-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8 lg:w-10 lg:h-10"
          >
            <Linkedin className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8 lg:w-10 lg:h-10"
          >
            <Coffee className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8 lg:w-10 lg:h-10"
          >
            <Github className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8 lg:w-10 lg:h-10"
          >
            <MessageCircle className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
        </div>

        {/* Download CV Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 lg:py-3 rounded-lg transition-all duration-200 text-sm lg:text-base">
          Download CV
        </Button>
      </Card>
    </div>
  )
}
