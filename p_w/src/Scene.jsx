import { OrbitControls } from '@react-three/drei'
import { Box } from '@react-three/drei'

export default function Scene() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial color="#BDBDAC" />
      </Box>
      <OrbitControls />
    </>
  )
}
