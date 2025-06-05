import { useState } from 'react'

export default function TooltipLink({ href, label, children, download }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition"
      >
        {children}
      </a>
      {hover && (
        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
          {label}
        </div>
      )}
    </div>
  )
}
