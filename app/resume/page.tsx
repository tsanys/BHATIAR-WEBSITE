import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap } from "lucide-react"

export default function ResumePage() {
  const experiences = [
    {
      title: "Senior Network Engineer",
      company: "PT. Technology Solutions Indonesia",
      location: "Jakarta, Indonesia",
      period: "2022 - Present",
      description:
        "Leading network infrastructure projects for enterprise clients, managing team of 5 engineers, and implementing cutting-edge networking solutions.",
      achievements: [
        "Reduced network downtime by 40% through proactive monitoring implementation",
        "Led migration of 15+ client networks to hybrid cloud architecture",
        "Designed and deployed SD-WAN solutions for multi-site organizations",
      ],
    },
    {
      title: "Network Engineer",
      company: "CV. Digital Network Solutions",
      location: "Depok, Indonesia",
      period: "2020 - 2022",
      description:
        "Responsible for network design, implementation, and maintenance for SME clients across various industries.",
      achievements: [
        "Successfully deployed 50+ network infrastructure projects",
        "Implemented comprehensive security solutions reducing security incidents by 60%",
        "Developed automation scripts improving configuration efficiency by 35%",
      ],
    },
    {
      title: "Junior Network Administrator",
      company: "PT. Cyber Infrastructure",
      location: "Bogor, Indonesia",
      period: "2018 - 2020",
      description:
        "Maintained and troubleshot network infrastructure, provided technical support, and assisted in network upgrades.",
      achievements: [
        "Maintained 99.5% network uptime across all managed systems",
        "Resolved 95% of network issues within SLA timeframes",
        "Completed Cisco CCNA certification during employment",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "2014 - 2018",
      details: "Specialization in Network and Information Systems",
    },
  ]

  const certifications = [
    { name: "Cisco Certified Network Professional (CCNP)", year: "2023" },
    { name: "Cisco Certified Network Associate (CCNA)", year: "2019" },
    { name: "CompTIA Network+", year: "2020" },
    { name: "AWS Certified Solutions Architect", year: "2022" },
    { name: "Fortinet Network Security Expert (NSE)", year: "2021" },
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
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Resume</h1>
                  <p className="text-xl text-muted-foreground">Network Engineer with 6+ years of experience</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-fit">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm">Depok, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">bhatiar@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-sm">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary" />
                  <span className="text-sm">Available</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Briefcase size={24} className="text-primary" />
                Professional Summary
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Experienced Network Engineer with over 6 years of expertise in designing, implementing, and
                  maintaining complex network infrastructures. Proven track record in enterprise network solutions,
                  cloud integration, and security implementation. Strong background in Cisco technologies, network
                  automation, and team leadership. Passionate about optimizing network performance and implementing
                  cutting-edge technologies to drive business success.
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase size={24} className="text-primary" />
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap size={24} className="text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award size={24} className="text-primary" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                    </div>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
