import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"
import { Network, Shield, Cloud, Settings, Monitor, Zap } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Network,
      title: "Network Design & Implementation",
      description: "Complete network infrastructure design and deployment for enterprises of all sizes.",
      features: ["LAN/WAN Design", "VLAN Configuration", "Routing Protocols", "Network Optimization"],
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security solutions to protect your network infrastructure from threats.",
      features: ["Firewall Configuration", "VPN Setup", "IDS/IPS Implementation", "Security Audits"],
    },
    {
      icon: Cloud,
      title: "Cloud Networking",
      description: "Seamless integration of cloud services with your existing network infrastructure.",
      features: ["Hybrid Cloud Setup", "SD-WAN Implementation", "Cloud Migration", "Multi-Cloud Connectivity"],
    },
    {
      icon: Monitor,
      title: "Network Monitoring",
      description: "24/7 network monitoring and performance optimization to ensure maximum uptime.",
      features: ["Real-time Monitoring", "Performance Analytics", "Alert Systems", "Capacity Planning"],
    },
    {
      icon: Settings,
      title: "Network Automation",
      description: "Automate routine network tasks and configurations to improve efficiency and reduce errors.",
      features: ["Configuration Management", "Automated Backups", "Script Development", "API Integration"],
    },
    {
      icon: Zap,
      title: "Troubleshooting & Support",
      description: "Expert troubleshooting and ongoing support to keep your network running smoothly.",
      features: ["24/7 Support", "Remote Diagnostics", "Performance Tuning", "Emergency Response"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundAnimation />
      <FloatingShapes />

      <div className="flex min-h-screen relative z-10">
        <ProfileSidebar />

        <main className="flex-1 p-6 md:p-8 lg:p-12">
          <Navigation />

          <div className="max-w-4xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">My Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional network engineering services to optimize your infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon size={32} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm uppercase tracking-wide text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Network?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help improve your network infrastructure and solve your connectivity challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Get Free Consultation
                </button>
                <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
