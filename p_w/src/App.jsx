import Resume from './components/Resume.jsx'
import Contact from './components/ui/contact.jsx'
import TableOfContents from './components/ui/TableOfContents.jsx'
import BackgroundScene from './components/three/BackgroundScene.jsx'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto bg-[#7B815F] text-white">
      
      {/* Three.js */}
      <div className=" 
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;">
        <Canvas>
          <BackgroundScene />
        </Canvas>
      </div>

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
