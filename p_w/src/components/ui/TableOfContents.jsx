import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50 text-[#BDBDAC] text-right">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-end items-center space-x-1 focus:outline-none w-full bg-white/10 px-2 py-1 rounded-md hover:bg-white/20 transition"
      >
        <span className="text-base font-semibold">Contents</span>
        <ChevronDown size={18} className={`${open ? 'rotate-180' : ''} transition-transform duration-300`} />
      </button>
      <div
        className={`transition-all duration-300 transform origin-top-right ${open ? 'scale-100 opacity-100 mt-2' : 'scale-95 opacity-0 h-0 overflow-hidden'}`}
      >
        <ul className="space-y-2 text-[#000000] text-base text-right">
          {sections.map((section) => (
            <li key={section.id} className="flex items-center justify-center space-x-2">
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  setOpen(false);
                }}
                className="inline-block px-2 py-0.5 rounded-md bg-[#000000] text-[#222] hover:bg-[#333] transition"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
