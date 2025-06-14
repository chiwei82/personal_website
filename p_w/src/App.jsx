import Resume from './components/Resume.jsx'
import Contact from './components/ui/contact.jsx'
import TableOfContents from './components/ui/TableOfContents.jsx'
import BackgroundScene from './components/three/BackgroundScene.jsx'
import HeaderBox from './components/three/objects/headerBox.jsx'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, DotScreen } from '@react-three/postprocessing'

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto bg-[#7B815F] text-white">
      
      
      {/* Three.js */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Canvas>
          <BackgroundScene />
        </Canvas>
      </div>
      <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 0, 8 ]
        }}
      >
          <HeaderBox />
          {/* <EffectComposer>
            <DotScreen angle={Math.PI / 4} scale={1.5} />
          </EffectComposer> */}
      </Canvas>

      {/* 上層內容 */}
      <div className="relative z-10">
        <Resume />
        <TableOfContents />
        {/* 其他內容 */}
        <footer className="w-full text-center text-xs text-[#BDBDAC] py-4">
          © {new Date().getFullYear()} Chi-Wei Feng. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
