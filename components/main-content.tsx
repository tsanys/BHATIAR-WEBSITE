import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle, Coffee } from "lucide-react"

export function MainContent() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Navigation />

      {/* Mobile Profile Header - Only visible on mobile */}
      <div className="lg:hidden mb-8 mt-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-2 relative overflow-hidden mb-4">
            <div className="absolute inset-2 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/professional-developer-in-hoodie.jpg"
                alt="Bhatiar Azhari Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold text-foreground mb-1">Bhatiar Azhari</h2>
          <p className="text-green-600 font-mono text-xs font-semibold mb-4">NET_ENG</p>

          {/* Mobile Social Links */}
          <div className="flex justify-center gap-2 mb-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8"
            >
              <Linkedin className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8"
            >
              <Coffee className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8"
            >
              <Github className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 bg-transparent w-8 h-8"
            >
              <MessageCircle className="h-3 w-3" />
            </Button>
          </div>

          {/* Mobile Download CV Button */}
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm">
            Download CV
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mt-4 md:mt-8 lg:mt-16">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 text-balance">
            Hello, I'm <span className="text-green-600">Bhatiar Azhari</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">
            Network{" "}
            <span className="bg-green-600 text-white px-2 md:px-3 py-1 rounded-lg text-lg sm:text-xl md:text-3xl">
              Engineer
            </span>
          </h2>

          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-balance">
            Based in Depok, Indonesia.
          </h3>
        </div>

        <div className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          <p className="text-pretty">
            Bhatiar Azhari is a skilled Network Engineer with extensive experience in designing, implementing, and
            maintaining complex network infrastructures. Specialized in network security, routing protocols, network
            optimization, troubleshooting, and ensuring reliable connectivity across enterprise environments. Passionate
            about emerging networking technologies and committed to delivering robust network solutions.
          </p>
        </div>
      </div>
    </div>
  )
}
