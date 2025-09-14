import { ProfileSidebar } from "@/components/profile-sidebar"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"
import { FloatingShapes } from "@/components/floating-shapes"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of SD-WAN: Transforming Enterprise Networks",
      excerpt:
        "Exploring how Software-Defined Wide Area Networks are revolutionizing the way enterprises connect their distributed locations and optimize network performance.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Network Technology",
      tags: ["SD-WAN", "Enterprise", "Cloud"],
      featured: true,
    },
    {
      title: "Implementing Zero Trust Network Architecture",
      excerpt:
        "A comprehensive guide to implementing Zero Trust principles in your network infrastructure, including practical steps and best practices.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Security",
      tags: ["Zero Trust", "Security", "Architecture"],
    },
    {
      title: "Network Automation with Python and Ansible",
      excerpt:
        "Learn how to automate repetitive network tasks using Python scripts and Ansible playbooks to improve efficiency and reduce human error.",
      date: "2024-01-02",
      readTime: "10 min read",
      category: "Automation",
      tags: ["Python", "Ansible", "Automation"],
    },
    {
      title: "5G Network Deployment Challenges and Solutions",
      excerpt:
        "Understanding the technical challenges in 5G network deployment and practical solutions for network engineers working on next-generation infrastructure.",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "5G Technology",
      tags: ["5G", "Deployment", "Infrastructure"],
    },
    {
      title: "Cloud Network Security Best Practices",
      excerpt:
        "Essential security practices for protecting cloud-based network infrastructure, including AWS and Azure specific recommendations.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Cloud Security",
      tags: ["Cloud", "Security", "AWS", "Azure"],
    },
    {
      title: "Troubleshooting BGP Routing Issues",
      excerpt:
        "Common BGP routing problems and systematic approaches to diagnose and resolve them in enterprise and service provider networks.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Routing",
      tags: ["BGP", "Troubleshooting", "Routing"],
    },
  ]

  const categories = [
    "All",
    "Network Technology",
    "Security",
    "Automation",
    "5G Technology",
    "Cloud Security",
    "Routing",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog & Articles</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, tutorials, and thoughts on network engineering and technology
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 mb-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">Featured</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="flex items-center gap-1 px-2 py-1 bg-muted text-xs rounded">
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-balance hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-muted text-xs rounded">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-xs rounded">+{post.tags.length - 2}</span>
                      )}
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm">
                      Read More
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter to get the latest articles on network engineering, technology trends, and
                industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
