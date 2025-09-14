"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { FloatingCube } from "@/components/floating-cube"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingCube />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Creative Developer</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
          Crafting digital experiences with modern technologies and creative vision
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" className="hover:text-accent">
            <Github size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent">
            <Linkedin size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent">
            <Mail size={24} />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
