import React from 'react';
import ResumeSection from './ResumeSection';
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import TooltipLink from './ui/TooltipLink';
import HoverPreview from './ui/HoverPreview'
import AgeTimer from './AgeTimer'

const skillChunks = [
  {
    title: 'Languages',
    color: 'bg-white/10 text-red-300',
    items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Three.js']
  },
  {
    title: 'Tools',
    color: 'bg-white/10 text-blue-300',
    items: ['PowerBI', 'Airflow', 'Docker', 'Git', 'GitHub']
  },
  {
    title: 'Specialties',
    color: 'bg-white/10 text-green-300',
    items: ['Data Cleaning', 'Visualisation']
  },
  {
    title: 'Soft Skills',
    color: 'bg-white/10 text-yellow-300',
    items: ['Problem-solving', 'Adaptability', 'Collaboration']
  },
  {
    title: 'Language',
    color: 'bg-white/10 text-purple-300',
    items: ['Japanese (N3)', 'English (IELTS 7)', 'Mandarin (Native)']
  }
];

export default function Resume() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-2 md:px-0">
      {/* Header */}
      <ResumeSection id="header">
        <div className="relative text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-2">CHI-WEI FENG</h1>
          <div className="text-xs md:text-base mb-1">Email: s481597@gmail.com | Phone: (+886) 975-802-185</div>
          <div className="text-xs md:text-base mb-4">Aspiring Software Engineer | Open to Internships & Graduate Roles | MSc CS @ Bristol (2025)</div>
          <div className="text-xs md:text-base mb-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <AgeTimer />
              </div>
              <div className="flex space-x-4">
                <TooltipLink href="mailto:s481597@gmail.com" label="Gmail">
                  <Mail size={20} />
                </TooltipLink>
                <TooltipLink href="https://www.linkedin.com/in/cwf8982" label="LinkedIn">
                  <Linkedin size={20} />
                </TooltipLink>
                <TooltipLink href="https://github.com/chiwei82" label="GitHub">
                  <Github size={20} />
                </TooltipLink>
                <TooltipLink href="/cv.pdf" label="Download Resume" download>
                  <Download size={20} />
                </TooltipLink>
              </div>
            </div>
          </div>
        </div>
      </ResumeSection>

      {/* Professional Summary */}
      <ResumeSection id='summary'>        
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Self-driven data analyst and automation specialist with hands-on experience in Python, SQL, Airflow, and Power BI, specialising in building reporting systems and workflow tools that align with business KPIs and accelerate decision-making. Passionate about bridging business logic with technical systems, and known for a Radical Candor work style and high ownership mindset. With a strong foundation in structured thinking and genuine work ethic, I thrive in fast-moving environments where clarity, autonomy, and impact matter.
          </p>
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection id="education">        
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">EDUCATION</h2>

          <div className="mb-1">
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="font-semibold">University of Bristol</span>
              <span className="block w-full md:w-auto md:inline">Starting September 2025</span>
            </div>
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="text-xs font-semibold">MSc Computer Science </span>
              <span className="text-xs font-semibold">Bristol, UK</span>
            </div>
          </div>

          <div className="mb-1">
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="font-semibold">National Taipei University</span>
              <span className="block w-full md:w-auto md:inline">September 2019 – June 2022</span>
            </div>
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="text-xs font-semibold">Bachelor of Arts in Economics</span>
              <span className="text-xs font-semibold">New Taipei, Taiwan</span>
            </div>
          </div>
        </div>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection id='experience'>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="font-semibold">
                UnicornFintech <br className="md:hidden" />
                <span className="text-xs md:text-sm block md:inline">(Data Tech Division of <a
                  href="https://www.vantagemarkets.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-gray-300 transition"
                >
                  <HoverPreview
                    text="Vantage Group"
                    image="./Vantage.png"
                    link="https://www.vantagemarkets.com/"
                  />
                </a>)</span>
              </span>
              <span className="block w-full md:w-auto md:inline">March 2023 – September 2024</span>
            </div>
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="text-xs font-semibold">Data Analyst</span>
              <span className="text-xs font-semibold">Taipei, Taiwan</span>
            </div>
            <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed">
              <li>Reduced manual reporting workload by 85% and shrank loaded data file size by 96% (300MB → 12MB) by developing automated reporting systems using Python, SQL, and Airflow—enhancing data accessibility for stakeholders across multiple departments.</li>
              <li>Enabled consistent next-day delivery of sales insights for regional sales leaders by designing and maintaining Power BI dashboards, improving KPI visibility and decision-making speed.</li>
              <li>Prevented ~35% interim staffing costs during headcount gaps by leading process handovers and knowledge documentation—avoiding the need for temporary hires over 2+ months.</li>
              <li>Improved sales team targeting accuracy by enhancing customer classification logic through a centralised database table—reducing stakeholder pushback and saving ~30% in communication and clarification time per campaign cycle.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="font-semibold">New Taipei City Government</span>
              <span className="block w-full md:w-auto md:inline">July 2021 – September 2021</span>
            </div>
            <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="text-xs font-semibold">Research Intern</span>
              <span className="text-xs font-semibold">New Taipei, Taiwan</span>
            </div>
            <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed">
              <li>Designed and developed a city-level COVID-19 dashboard using internal data, enabling senior officials to visually track case distribution and time-based trends across districts during the pandemic.</li>
              <li>Collaborated with interns from legal, medical, and policy backgrounds to analyse social issues such as energy problems and homeless animals, presenting data-supported policy suggestions to city department leads.</li>
            </ul>
          </div>
        </div>
      </ResumeSection>

      {/* Auto-didacticism */}
      <ResumeSection id='auto-didacticism'>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Career Transition</h2>
          <div className="flex justify-between flex-wrap text-sm md:text-base leading-relaxed">
              <span className="block w-full md:w-auto md:inline">October 2024 – September 2025</span>
            </div>
          <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed">           
            <li>Designed and executed an intensive, self-driven transition plan toward a career in software engineering, combining academic prep, coding practice, and soft skill enhancement. By combining practical coding skills (Python, SQL), system design thinking, and applied AI/ML knowledge, I have strategically positioned myself to thrive as a software engineer in the evolving landscape of technology innovation.</li>
          </ul>
        </div>
      </ResumeSection>

      {/* Additional Skills */}
      <ResumeSection id='additional-skills'>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">SKILLS</h2>
            {skillChunks.map((chunk) => (
              <div key={chunk.title} className="mb-2">
                <h3 className="text-sm font-semibold mb-1">{chunk.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {chunk.items.map((item) => (
                    <div
                      key={item}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${chunk.color}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </ResumeSection>

      {/* Hobbies */}
      <ResumeSection id="hobbies">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">HOBBIES</h2>
          <div className="flex flex-wrap gap-2 text-sm leading-relaxed">
            <span className="bg-white/10 text-pink-300 px-3 py-1 rounded-full">Photography</span>
            <span className="bg-white/10 text-pink-300 px-3 py-1 rounded-full">Coffee Brewing</span>
            <span className="bg-white/10 text-pink-300 px-3 py-1 rounded-full">Swimming</span>
            <span className="bg-white/10 text-pink-300 px-3 py-1 rounded-full">Gaming</span>
          </div>
        </div>
      </ResumeSection>
            
    </div>
  );
}
