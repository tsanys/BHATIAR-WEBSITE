"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Home, Briefcase, Settings, FileText, Code, BookOpen, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/services", label: "Services", icon: Settings },
    { href: "/resume", label: "Resume", icon: FileText },
    { href: "/skills", label: "Skills", icon: Code },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="flex items-center justify-between mb-8">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="md:hidden rounded-lg border-border bg-transparent"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="rounded-lg border-border bg-transparent"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </Button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 flex-wrap">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Button
              key={item.href}
              variant={active ? "default" : "outline"}
              className={`rounded-lg transition-all duration-200 ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              }`}
              asChild
            >
              <Link href={item.href} className="flex items-center gap-2">
                <Icon size={16} />
                {item.label}
              </Link>
            </Button>
          )
        })}
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg md:hidden z-50">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Button
                  key={item.href}
                  variant={active ? "default" : "ghost"}
                  className="justify-start"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <Icon size={16} />
                    {item.label}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
