"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"

function HumanModel(props) {
  const [modelError, setModelError] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const headRef = useRef()
  const modelRef = useRef()

  const gltf = useGLTF("/models/survival_character.glb")

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(() => {
    if (headRef.current) {
      headRef.current.rotation.y += (mousePos.x * 0.5 - headRef.current.rotation.y) * 0.05
      headRef.current.rotation.x += (-mousePos.y * 0.3 - headRef.current.rotation.x) * 0.05
    }
  })

  if (modelError || !gltf?.scene) {
    return (
      <group {...props}>
        <group ref={headRef}>
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#00d4ff" emissive="#001122" />
          </mesh>
          <mesh position={[0, 1.3, 0]}>
            <cylinderGeometry args={[0.15, 0.2, 0.3, 8]} />
            <meshStandardMaterial color="#0099cc" emissive="#001122" />
          </mesh>
        </group>
        <group>
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.4, 0.3, 1.2, 8]} />
            <meshStandardMaterial color="#0066aa" emissive="#000811" />
          </mesh>
          <mesh position={[-0.6, 1, 0]} rotation={[0, 0, 0.3]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
            <meshStandardMaterial color="#0099cc" emissive="#001122" />
          </mesh>
          <mesh position={[0.6, 1, 0]} rotation={[0, 0, -0.3]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
            <meshStandardMaterial color="#0099cc" emissive="#001122" />
          </mesh>
          <mesh position={[-0.2, -0.2, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
            <meshStandardMaterial color="#0066aa" emissive="#000811" />
          </mesh>
          <mesh position={[0.2, -0.2, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
            <meshStandardMaterial color="#0066aa" emissive="#000811" />
          </mesh>
        </group>
      </group>
    )
  }

  return (
    <group {...props} ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, 2, -5]} intensity={0.3} color="#00d4ff" />
        <pointLight position={[0, 2, 2]} intensity={0.5} color="#0099ff" />

        <HumanModel scale={1.2} position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}
