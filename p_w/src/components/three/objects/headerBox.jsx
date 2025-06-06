import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

export default function HeaderBox() {
  const boxRef = useRef()

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += delta * 1.5
      boxRef.current.rotation.x -= delta * 1.5
    }
  })

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 3, 3]} />
      <Box ref={boxRef} args={[2, 2, 2]} position={[0, -1, 0]}>
        <meshStandardMaterial color="white" />
      </Box>
      <OrbitControls enableZoom={false} />
    </>
  )
}
