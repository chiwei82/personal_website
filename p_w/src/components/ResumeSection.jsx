import React from 'react'

export default function ResumeSection({ children, id }) {
  return (
    <section id={id} className="w-full py-6 px-4 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  )
}
