import { Navigation } from "@/components/navigation"

export function MainContent() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Navigation />

      <div className="max-w-4xl mt-8 md:mt-16">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Hello, I'm <span className="text-green-600">Bhatiar Azhari</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">
            Network{" "}
            <span className="bg-green-600 text-white px-2 md:px-3 py-1 rounded-lg text-xl md:text-3xl">Engineer</span>
          </h2>

          <h3 className="text-xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Based in Depok, Indonesia.
          </h3>
        </div>

        <div className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
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
