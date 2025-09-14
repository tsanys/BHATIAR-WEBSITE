import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundAnimation />
      <FloatingShapes />

      <div className="flex min-h-screen relative z-10">
        <ProfileSidebar />

        <main className="flex-1 p-6 md:p-8 lg:p-12">
          <Navigation />

          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">My Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Showcasing my network engineering projects and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Network Infrastructure Project */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Network Topology</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Network Design</h3>
                <p className="text-muted-foreground mb-4">
                  Designed and implemented a scalable network infrastructure for a 500+ employee organization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Cisco</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">VLAN</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">BGP</span>
                </div>
              </div>

              {/* Security Implementation */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Security Dashboard</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Network Security Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented comprehensive security measures including firewalls, IDS/IPS, and VPN solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Firewall</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">VPN</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">IDS/IPS</span>
                </div>
              </div>

              {/* Monitoring System */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Monitoring Interface</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Network Monitoring System</h3>
                <p className="text-muted-foreground mb-4">
                  Deployed comprehensive monitoring solution using SNMP, Nagios, and custom dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">SNMP</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Nagios</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Grafana</span>
                </div>
              </div>

              {/* Cloud Migration */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Cloud Architecture</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Network Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Led migration of on-premises network infrastructure to hybrid cloud architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">AWS</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Hybrid Cloud</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">SD-WAN</span>
                </div>
              </div>

              {/* Automation Project */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Automation Scripts</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Network Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Developed Python scripts for automated network configuration and maintenance tasks.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Ansible</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">REST API</span>
                </div>
              </div>

              {/* Disaster Recovery */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">DR Planning</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Disaster Recovery Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Designed and implemented comprehensive disaster recovery procedures for critical network
                  infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">DR Planning</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Backup</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Redundancy</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
