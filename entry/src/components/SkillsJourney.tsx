import { portfolio, type Skill, type TimelineItem } from '../data/portfolio'
import { useEffect, useRef } from 'react'

const levelConfig: Record<Skill['level'], { label: string; bar: string }> = {
  expert: { label: 'Expert', bar: 'w-full' },
  advanced: { label: 'Advanced', bar: 'w-3/4' },
  learning: { label: 'Learning', bar: 'w-1/2' },
}

export default function SkillsJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const section = sectionRef.current
      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const sectionProgress = Math.max(0, Math.min(1, (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight)))

      // Opacity and parallax effect for header
      if (headerRef.current) {
        const opacityHeader = Math.max(0, Math.min(1, sectionProgress * 2))
        headerRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        headerRef.current.style.opacity = opacityHeader.toString()
        headerRef.current.style.transform = `translateY(${(1 - sectionProgress) * 20}px)`
      }

      // Opacity and parallax effect for skills
      if (skillsRef.current) {
        const opacitySkills = Math.max(0, Math.min(1, sectionProgress * 1.8))
        skillsRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        skillsRef.current.style.opacity = opacitySkills.toString()
        skillsRef.current.style.transform = `translateY(${(1 - sectionProgress) * 30}px)`
      }

      // Opacity and parallax effect for timeline
      if (timelineRef.current) {
        const opacityTimeline = Math.max(0, Math.min(1, sectionProgress * 1.5))
        timelineRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        timelineRef.current.style.opacity = opacityTimeline.toString()
        timelineRef.current.style.transform = `translateY(${(1 - sectionProgress) * 40}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="skills-journey" ref={sectionRef} className="relative py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px bg-gray-600 w-16"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-400">
              Skills & Journey
            </h2>
            <div className="h-px bg-gray-600 w-16"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div ref={skillsRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {portfolio.skills.map((skill: Skill) => {
                const cfg = levelConfig[skill.level]
                return (
                  <div key={skill.name} className="group relative p-5 rounded-xl bg-gray-800 border border-gray-600 hover:border-gray-400 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold text-lg">{skill.name}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{cfg.label}</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                      <div className={`h-full rounded-full bg-gray-400 ${cfg.bar} group-hover:bg-white transition-all duration-500`}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div ref={timelineRef} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>

              {portfolio.timeline.map((item: TimelineItem) => (
                <div key={item.id} className="relative mb-12 pl-12">
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-gray-600 ring-4 ring-black"></div>
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-800 border border-gray-600 text-gray-400 text-xs font-bold mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}