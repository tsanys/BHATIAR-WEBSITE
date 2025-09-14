"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export function AnimatedEnvelope() {
  const envelopeRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (envelopeRef.current) {
      envelopeRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      envelopeRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group>
      {/* Envelope body */}
      <mesh ref={envelopeRef} position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.9} roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Envelope flap */}
      <mesh position={[0, 0.75, 0.05]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[2.5, 1, 0.05]} />
        <meshStandardMaterial color="#374151" transparent opacity={0.8} />
      </mesh>

      {/* Floating particles around envelope */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 3,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 1,
          ]}
        >
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#6366f1" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}
