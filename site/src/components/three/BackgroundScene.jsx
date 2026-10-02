// bg.jsx
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { bgVertexShader, bgFragmentShader } from './shader/bgShader.jsx'

export default function Background() {
  const meshRef = useRef()
  const { size } = useThree()
  const resolution = new THREE.Vector2(size.width, size.height)

  const shaderMaterial = useRef(
    new THREE.ShaderMaterial({
      vertexShader: bgVertexShader,
      fragmentShader: bgFragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: resolution },
        uStrength: { value: 0.2 },
      },
      depthWrite: false,
      depthTest: false,
      transparent: true,
    })
  ).current

  useFrame((state) => {
    shaderMaterial.uniforms.iTime.value = state.clock.getElapsedTime()
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[24, 16]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
}
