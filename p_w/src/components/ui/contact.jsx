import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CircleText() {
  const groupRef = useRef(null)

  useEffect(() => {
    // 使用 GSAP 讓整個 group（包含文字與路徑）旋轉，避免飄移
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
    <div>
      <svg width="80" height="80" viewBox="0 0 200 200">
        {/* 定義一條以 (0,0) 為中心的圓形路徑 */}
        <defs>
          <path
            id="circlePath"
            d="M0,0 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
          />
        </defs>

        {/* 包含文字與圓形的群組，整體置中並旋轉 */}
        <g ref={groupRef} transform="translate(100,100)">
          <text
            fill="white"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="2"
          >
            <textPath href="#circlePath" startOffset="0">
              CONTACT ME ! CONTACT ME ! CONTACT ME ! CONTACT ME ! CONTACT ME ! CONTACT ME !
            </textPath>
          </text>
        </g>

        {/* 箭頭從左下角 (約 -45.25, 45.25) 指向右上角 (約 45.25, -45.25)，長度為圓直徑的 80% */}
        <g transform="translate(100,100)">
          <line x1="-45.25" y1="45.25" x2="45.25" y2="-45.25" stroke="white" strokeWidth="2" />
          <polygon points="45.25,-45.25 39.25,-43.25 41.25,-39.25" fill="white" />
        </g>
      </svg>
    </div>
  )
}
