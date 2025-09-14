import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Linkedin } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "bhatiar.azhari@example.com",
      description: "Best for detailed inquiries and project discussions",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 812-3456-7890",
      description: "Available for urgent matters and consultations",
      action: "Call Now",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Quick questions and instant communication",
      action: "Message",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/bhatiar-azhari",
      description: "Professional networking and connections",
      action: "Connect",
    },
  ]

  const availability = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM WIB" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM WIB" },
    { day: "Sunday", hours: "Emergency only" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your network infrastructure needs and how I can help optimize your systems
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select a service</option>
                      <option>Network Design & Implementation</option>
                      <option>Network Security</option>
                      <option>Cloud Networking</option>
                      <option>Network Monitoring</option>
                      <option>Network Automation</option>
                      <option>Troubleshooting & Support</option>
                      <option>Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell me about your project requirements, current challenges, or any specific questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Methods</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon
                      return (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{method.title}</h4>
                            <p className="text-primary text-sm mb-1">{method.value}</p>
                            <p className="text-muted-foreground text-xs mb-2">{method.description}</p>
                            <button className="text-xs text-primary hover:underline">{method.action}</button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Location & Availability</h3>

                  <div className="flex items-start gap-3 mb-6">
                    <MapPin size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Based in Depok, Indonesia</h4>
                      <p className="text-muted-foreground text-sm">
                        Available for on-site visits in Jakarta, Bogor, Depok, Tangerang, and Bekasi areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-medium mb-3">Working Hours</h4>
                      <div className="space-y-2">
                        {availability.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">{schedule.day}</span>
                            <span className="font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Email: Within 4 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">WhatsApp: Within 1 hour</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Phone: Immediate (during business hours)</span>
                    </div>
                  </div>
                </div>

                {/* Schedule Meeting */}
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <Calendar size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Book a free 30-minute consultation to discuss your network requirements
                  </p>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
