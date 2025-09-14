import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, MessageCircle, Coffee } from "lucide-react"

export function ProfileSidebar() {
  return (
    <div className="w-80 p-6 flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full p-6 bg-card border-border/50 shadow-lg">
        {/* Profile Image with Green Background */}
        <div className="relative mb-6">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-4 relative overflow-hidden">
            {/* Profile Image */}
            <div className="absolute inset-4 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/professional-developer-in-hoodie.jpg"
                alt="Bhatiar Azhari Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-1">Bhatiar Azhari</h2>
          <p className="text-green-600 font-mono text-sm font-semibold">NET_ENG</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent"
          >
            <Coffee className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent"
          >
            <Github className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>

        {/* Download CV Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
          Download CV
        </Button>
      </Card>
    </div>
  )
}
