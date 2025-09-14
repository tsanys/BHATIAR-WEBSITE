"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js/R3F", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 85 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Skills & Expertise</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-primary">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 3D Skills Visualization */}
          <div className="h-96">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />

              {/* 3D Text */}
              <Text3D font="/fonts/Geist_Bold.json" size={0.8} height={0.1} position={[-2, 1, 0]}>
                SKILLS
                <meshStandardMaterial color="#6366f1" />
              </Text3D>

              {/* Floating skill icons represented as geometric shapes */}
              {skills.map((skill, index) => (
                <mesh
                  key={skill.name}
                  position={[
                    Math.cos((index / skills.length) * Math.PI * 2) * 3,
                    Math.sin((index / skills.length) * Math.PI * 2) * 2,
                    Math.sin((index / skills.length) * Math.PI * 2) * 1,
                  ]}
                  rotation={[0, 0, (index / skills.length) * Math.PI * 2]}
                >
                  <octahedronGeometry args={[0.5]} />
                  <meshStandardMaterial color="#374151" transparent opacity={0.8} />
                </mesh>
              ))}

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
