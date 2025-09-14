import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"
import { Network, Shield, Cloud, Code, Database, Settings } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Network Technologies",
      icon: Network,
      skills: [
        { name: "Cisco IOS/IOS-XE", level: 95 },
        { name: "Routing Protocols (BGP, OSPF, EIGRP)", level: 90 },
        { name: "Switching & VLANs", level: 95 },
        { name: "SD-WAN", level: 85 },
        { name: "MPLS", level: 80 },
        { name: "QoS Implementation", level: 85 },
      ],
    },
    {
      title: "Network Security",
      icon: Shield,
      skills: [
        { name: "Firewall Configuration (Fortinet, Cisco ASA)", level: 90 },
        { name: "VPN Technologies (IPSec, SSL)", level: 88 },
        { name: "IDS/IPS Systems", level: 85 },
        { name: "Network Access Control (NAC)", level: 80 },
        { name: "Security Auditing", level: 85 },
        { name: "Penetration Testing", level: 75 },
      ],
    },
    {
      title: "Cloud & Virtualization",
      icon: Cloud,
      skills: [
        { name: "AWS Networking", level: 85 },
        { name: "Azure Virtual Networks", level: 80 },
        { name: "VMware vSphere", level: 88 },
        { name: "Docker & Kubernetes", level: 75 },
        { name: "Hybrid Cloud Integration", level: 82 },
        { name: "Cloud Security", level: 80 },
      ],
    },
    {
      title: "Automation & Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Ansible", level: 80 },
        { name: "Bash Scripting", level: 88 },
        { name: "REST APIs", level: 82 },
        { name: "Git Version Control", level: 85 },
        { name: "CI/CD Pipelines", level: 75 },
      ],
    },
    {
      title: "Monitoring & Management",
      icon: Database,
      skills: [
        { name: "SNMP", level: 90 },
        { name: "Nagios", level: 85 },
        { name: "Grafana", level: 80 },
        { name: "ELK Stack", level: 75 },
        { name: "Network Performance Analysis", level: 88 },
        { name: "Capacity Planning", level: 82 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: [
        { name: "Wireshark", level: 92 },
        { name: "GNS3/EVE-NG", level: 88 },
        { name: "SolarWinds", level: 85 },
        { name: "Cisco Prime", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "JIRA/ServiceNow", level: 85 },
      ],
    },
  ]

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 80) return "bg-primary"
    if (level >= 70) return "bg-yellow-500"
    return "bg-orange-500"
  }

  const getSkillLabel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 80) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Technical Skills</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive expertise in network engineering and related technologies
              </p>
            </div>

            {/* Skills Legend */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Proficiency Levels</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Expert (90-100%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-sm">Advanced (80-89%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm">Intermediate (70-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm">Beginner (60-69%)</span>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                return (
                  <div key={categoryIndex} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{getSkillLabel(skill.level)}</span>
                              <span className="text-xs bg-muted px-2 py-1 rounded">{skill.level}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm committed to staying current with the latest networking technologies and industry trends. Currently
                focusing on expanding my expertise in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Intent-Based Networking (IBN)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">5G Network Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Network Function Virtualization</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">AI/ML in Network Operations</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Zero Trust Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Edge Computing Networks</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
