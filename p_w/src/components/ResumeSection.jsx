import React from 'react'
// ResumeSection.jsx
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ResumeSection({ children, id }) {

  const sectionRef = useRef()

  useEffect(() => {
    const el = sectionRef.current

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        paused: true,
      }
    )

    ScrollTrigger.create({
      trigger: el,
      start: 'top 95%',
      end: 'top 30%', // 可以根據需要調整
      onEnter: () => anim.play(),
      onLeaveBack: () => anim.reverse(), // 離開回上方時反向動畫
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id={id} ref={sectionRef} className="w-full py-6 px-4 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  )
}
