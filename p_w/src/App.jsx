import Resume from './components/Resume.jsx'
import Contact from './components/ui/contact.jsx'
import TableOfContents from './components/ui/TableOfContents.jsx'
import BackgroundScene from './components/three/BackgroundScene.jsx'
import HeaderBox from './components/three/objects/headerBox.jsx'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto bg-[#7B815F] text-white">
      
      
      {/* Three.js */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Canvas>
          <BackgroundScene />
        </Canvas>
      </div>
      <Canvas>
          <HeaderBox />
      </Canvas>

      {/* 上層內容 */}
      <Resume />
      <TableOfContents />

      {/* 固定右下角聯絡按鈕 */}
      {/* <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Contact />
      </div> */}

      {/* 頁尾資訊 */}
      <footer className="w-full text-center text-xs text-[#BDBDAC] py-4">
        © {new Date().getFullYear()} Chi-Wei Feng. All rights reserved.
      </footer>
    </div>
  )
}
