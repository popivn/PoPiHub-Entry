import { portfolio } from '../data/portfolio'
import { getAboutData } from '../data/about'
import { useEffect, useRef } from 'react'

export default function About() {
  const data = getAboutData()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

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

      // Opacity and parallax effect for logo
      if (logoRef.current) {
        const opacityLogo = Math.max(0, Math.min(1, sectionProgress * 1.8))
        logoRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        logoRef.current.style.opacity = opacityLogo.toString()
        logoRef.current.style.transform = `translateY(${(1 - sectionProgress) * 30}px)`
      }

      // Opacity and parallax effect for text
      if (textRef.current) {
        const opacityText = Math.max(0, Math.min(1, sectionProgress * 1.5))
        textRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        textRef.current.style.opacity = opacityText.toString()
        textRef.current.style.transform = `translateY(${(1 - sectionProgress) * 40}px)`
      }

      // Opacity and parallax effect for skills
      if (skillsRef.current) {
        const opacitySkills = Math.max(0, Math.min(1, sectionProgress * 1.2))
        skillsRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        skillsRef.current.style.opacity = opacitySkills.toString()
        skillsRef.current.style.transform = `translateY(${(1 - sectionProgress) * 50}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 bg-black">
      <div className="w-full">
        <div ref={headerRef} className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-600 w-16"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-400">
              About Me
            </h2>
            <div className="h-px bg-gray-600 w-16"></div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 px-6 md:px-12">
          <div ref={logoRef} className="relative">
            <img src={portfolio.logo} alt={portfolio.name} className="w-full max-w-xs rounded-full border-4 border-gray-600" />
          </div>
          
          <div ref={textRef} className="text-center space-y-2">
            <p className="text-white font-bold text-xl">{data.fullName}</p>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <i className="fa-solid fa-location-dot"></i>
              {data.location}
            </p>
          </div>

          <div ref={skillsRef} className="flex flex-wrap gap-3 justify-center">
            {data.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium">
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
