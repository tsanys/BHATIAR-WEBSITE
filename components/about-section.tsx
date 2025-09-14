"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Environment } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar/Profile */}
          <div className="h-96 relative">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Environment preset="sunset" />
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} />
              <Sphere args={[1.5]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#6366f1" transparent opacity={0.8} roughness={0.2} metalness={0.8} />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate creative developer with over 5 years of experience in crafting digital experiences that
              blend functionality with aesthetic appeal. My expertise spans across modern web technologies, 3D graphics,
              and user interface design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, innovative design, and seamless user experiences. When I'm not
              coding, you'll find me exploring new technologies, contributing to open-source projects, or experimenting
              with 3D art.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
