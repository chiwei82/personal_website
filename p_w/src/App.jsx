import { Canvas } from '@react-three/fiber'
import Scene from './Scene.jsx'
import Contact from './components/ui/contact.jsx'

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* 3D 場景 */}
      <Canvas className="canvas">
        <Scene />
      </Canvas>
      {/* Contact 元件，固定在右下角 */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Contact />
      </div>
    </div>
  )
}
