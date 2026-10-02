import React from 'react';
import ResumeSection from './ResumeSection';
import { Github, Linkedin, Mail, Download, Code } from 'lucide-react'
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
    items: ['Japanese (N3)', 'English (IELTS 7 - CEFR C1)', 'Mandarin (Native)']
  }
];

export default function Resume() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-2 md:px-0">
      {/* Header */}
      <ResumeSection id="header">
        <div className="relative text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-2">CHI-WEI FENG</h1>
          <div className="text-sm md:text-base mb-2 space-x-4 border border-gray-300 rounded px-2 py-2">
            <AgeTimer />
          </div>
          <div className="text-sm md:text-base mb-1">Email: s481597@gmail.com</div>
          <div className="text-sm md:text-base mb-1">Phone: (+886) 975-802-185</div>
          <div className="text-sm md:text-base mb-2"> <span style={{ color: '#E4C73E' }}>Aspiring Software Engineer </span>| MSc CS @ Bristol (2025)</div>
          <div className="text-sm md:text-base mb-1">
            <div className="flex justify-end space-x-4">
              <TooltipLink href="mailto:s481597@gmail.com" label="Gmail">
                <Mail size={20} />
              </TooltipLink>
              <TooltipLink href="https://www.linkedin.com/in/cwf8982" label="LinkedIn">
                <Linkedin size={20} />
              </TooltipLink>
              <TooltipLink href="https://leetcode.com/u/GLeh3pmggC/" label="LeetCode">
                <img src="./leetcode.svg" alt="LeetCode" className="w-5 h-5"/>
              </TooltipLink>
              <TooltipLink href="https://github.com/chiwei82" label="GitHub">
                <Github size={20} />
              </TooltipLink>
              <TooltipLink href="./cv.pdf" label="Download Resume" download>
                <Download size={20} />
              </TooltipLink>
            </div>
          </div>
        </div>
      </ResumeSection>

      {/* Personal Summary */}
      <ResumeSection id='summary'>        
        <div>
          <p className="text-lg md:text-xl">
            Hi! I am Tony. I was a  <span style={{ color: '#E4C73E' }}>data analyst</span> with hands-on experience in <span style={{ color: '#E4C73E' }}>Python, SQL, Airflow, and Power BI</span>, specialising in building reporting systems and workflow tools that align with business KPIs and accelerate decision-making.
            <br/>
            I am always passionate about bridging business logic with technical systems. To advance my skills, I am pursuing a Master's degree in Computer Science with a focus on building sophisticated, production-ready systems informed by real-world business needs.
            <br/> 
            With a strong foundation in structured thinking and genuine work ethic, I believe I can contribute to your team's success.
          </p>
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection id="education">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">EDUCATION</h2>
          <table className="w-full text-left text-sm md:text-base border border-border">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="border border-border px-4 py-2 font-semibold">School</th>
                <th className="hidden md:table-cell border border-border px-4 py-2 font-semibold">Period</th>
                <th className="border border-border px-4 py-2 font-semibold">Degree</th>
                <th className="hidden md:table-cell border border-border px-4 py-2 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 whitespace-nowrap">University of Bristol</td>
                <td className="hidden md:table-cell border border-border px-4 py-2 text-nowrap">Starting Sep 2025</td>
                <td className="border border-border px-4 py-2">MSc Computer Science</td>
                <td className="hidden md:table-cell border border-border px-4 py-2">Bristol, UK</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 whitespace-nowrap">National Taipei University</td>
                <td className="hidden md:table-cell border border-border px-4 py-2">Sep 2019 – Jun 2022</td>
                <td className="border border-border px-4 py-2">BA in Economics</td>
                <td className="hidden md:table-cell border border-border px-4 py-2">New Taipei, Taiwan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection id='experience'>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between flex-wrap text-lg md:text-xl leading-relaxed md:leading-relaxed">
              <span className="font-semibold">
                UnicornFintech <br className="md:hidden" />
                <span className="text-sm md:text-base block md:inline">(Data Tech Division of <a
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
            <div className="flex justify-between flex-wrap text-lg md:text-xl leading-relaxed md:leading-relaxed">
              <span className="text-sm font-semibold">Data Analyst</span>
              <span className="text-sm font-semibold">Taipei, Taiwan</span>
            </div>
            <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed md:leading-relaxed">
              <li>Reduced manual reporting workload by 85% and shrank loaded data file size by 96% (300MB → 12MB) by developing automated reporting systems using Python, SQL, and Airflow—enhancing data accessibility for stakeholders across multiple departments.</li>
              <li>Enabled consistent next-day delivery of sales insights for regional sales leaders by designing and maintaining Power BI dashboards, improving KPI visibility and decision-making speed.</li>
              <li>Prevented ~35% interim staffing costs during headcount gaps by leading process handovers and knowledge documentation—avoiding the need for temporary hires over 2+ months.</li>
              <li>Improved sales team targeting accuracy by enhancing customer classification logic through a centralised database table—reducing stakeholder pushback and saving ~30% in communication and clarification time per campaign cycle.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between flex-wrap text-lg md:text-xl leading-relaxed md:leading-relaxed">
              <span className="font-semibold">New Taipei City Government</span>
              <span className="block w-full md:w-auto md:inline">July 2021 – September 2021</span>
            </div>
            <div className="flex justify-between flex-wrap text-lg md:text-xl leading-relaxed md:leading-relaxed">
              <span className="text-sm font-semibold leading-loosed md:leading-loosed">Research Intern</span>
              <span className="text-sm font-semibold leading-loosed md:leading-loosed">New Taipei, Taiwan</span>
            </div>
            <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed md:leading-relaxed">
              <li>Designed and developed a city-level COVID-19 dashboard using internal data, enabling senior officials to visually track case distribution and time-based trends across districts during the pandemic.</li>
              <li>Collaborated with interns from legal, medical, and policy backgrounds to analyse social issues such as energy problems and homeless animals, presenting data-supported policy suggestions to city department leads.</li>
            </ul>
          </div>
        </div>
      </ResumeSection>

      {/* Auto-didacticism */}
      <ResumeSection id='auto-didacticism'>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Career Transition</h2>
          <div className="flex justify-between flex-wrap text-lg md:text-xl leading-relaxed md:leading-relaxed">
              <span className="block w-full md:w-auto md:inline">October 2024 – September 2025</span>
            </div>
          <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed md:leading-relaxed">           
            <li>
              During my gap year, I dedicated myself to building both technical and professional foundations. I self-taught Data Structures and Algorithms and completed <a href="https://leetcode.com/u/GLeh3pmggC/" style={{ color: '#E4C73E' }}>400+ LeetCode problems grinding</a>, which significantly sharpened my problem-solving abilities.<br/> 
              I also studied system design through <span style={{ color: '#E4C73E' }}>Grokking the System Design Interview</span>, which provided me with a solid understanding of software design patterns and best practices.<br/> 
              Beyound these technical pursuits, I delved into <a href = "https://threejs-journey.com/certificate/view/46954" style={{ color: '#E4C73E' }}>Three.js</a>, exploring shader programming, 3D website development, and creative website design, which deepened my understanding of modern web development philosophies. <br/>
              In parallel, I actively worked on <span style={{ color: '#E4C73E' }}>improving my English communication skills</span> to prepare for an international work environment. This period allowed me to grow as a technically competent and versatile learner, fully prepared to pursue my goal of becoming a Software Engineer.
            </li>
          </ul>
        </div>
      </ResumeSection>

      {/* Additional Skills */}
      <ResumeSection id='additional-skills'>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">SKILLS</h2>
            {skillChunks.map((chunk) => (
              <div key={chunk.title} className="mb-2">
                <h3 className="text-base font-semibold mb-1">{chunk.title}</h3>
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
