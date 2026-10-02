import { useState } from 'react'

export default function HoverPreview({ text, image }) {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <span
      className="relative inline-block font-semibold underline cursor-pointer text-white"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
    >
      {text}

      {/* 預覽圖片跟著滑鼠移動 */}
      <img
        src={image}
        alt="preview"
        className={`fixed z-50 pointer-events-none w-[160px] h-auto rounded object-cover shadow-lg transition-opacity duration-200 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: position.y - 40,
          left: position.x + 16,
        }}
      />
    </span>
  )
}
