import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function StarModel() {
  const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf')
  const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6
    }
  })

  return <primitive object={gltf.scene} ref={ref} scale={1.5} />
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf')

export default function CircleText() {
  const iconSize = 32
  const circleRadius = 32
  const fontSize = 12
  const letterSpacing = 2
  const fontWeight = 'bold'
  const textColor = 'white'
  const padding = fontSize * 1.2
  const svgSize = circleRadius * 2 + padding * 2
  const center = circleRadius + padding
  const groupRef = useRef(null)

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current, {
        rotate: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })
    }
  }, [])

  return (
    <div className="relative" style={{ width: svgSize, height: svgSize }}>
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} className="absolute top-0 left-0">
        <defs>
          <path
            id="circlePath"
            d={`M0,0 m-${circleRadius},0 a${circleRadius},${circleRadius} 0 1,1 ${circleRadius * 2},0 a${circleRadius},${circleRadius} 0 1,1 -${circleRadius * 2},0`}
          />
        </defs>
        <g ref={groupRef} transform={`translate(${center},${center})`}>
          <text
            fill={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
          >
            <textPath href="#circlePath" startOffset="0">
              CONTACT ME ! CONTACT ME !
            </textPath>
          </text>
        </g>
      </svg>

      {/* Frosted Glass Cube */}
      <Canvas
        style={{ width: svgSize * 0.75, height: svgSize * 0.75 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        gl={{ alpha: true }}
        camera={{ position: [1.5, 1.5, 2.5], fov: 50 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} />
        <StarModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}