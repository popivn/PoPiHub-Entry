import { portfolio, type Project, type ProjectCategory } from '../data/portfolio'
import { useEffect, useRef } from 'react'

const categoryConfig: Record<ProjectCategory, { label: string; icon: string }> = {
  school: { label: 'School Projects', icon: 'fa-solid fa-graduation-cap' },
  work: { label: 'Work Projects', icon: 'fa-solid fa-briefcase' },
  personal: { label: 'Personal Projects', icon: 'fa-solid fa-user-astronaut' },
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <div 
      className={`group relative rounded-2xl bg-gray-800 border border-gray-600 hover:border-gray-400 transition-all duration-300 overflow-hidden ${p.highlight ? 'ring-1 ring-gray-400' : ''}`}
      data-project-index={index}
    >
      {p.highlight && (
        <div className="absolute top-0 right-0 px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-bl-xl">
          <i className="fa-solid fa-star mr-1"></i>HIGHLIGHT
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition">{p.title}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[80px]">{p.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {p.tech.map((t, techIndex) => (
            <span key={techIndex} className="px-2.5 py-1 rounded-md bg-gray-700 border border-gray-600 text-gray-300 text-xs font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-600">
          <span className="text-gray-500 text-xs font-medium">{p.date}</span>
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-bold transition group-hover:gap-2.5">
              Visit
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

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

      // Opacity and parallax effect for categories
      if (categoriesRef.current) {
        const opacityCategories = Math.max(0, Math.min(1, sectionProgress * 1.8))
        categoriesRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        categoriesRef.current.style.opacity = opacityCategories.toString()
        categoriesRef.current.style.transform = `translateY(${(1 - sectionProgress) * 30}px)`
      }

      // Animation for project cards coming from both sides
      const projectCards = section.querySelectorAll('[data-project-index]')
      projectCards.forEach((card) => {
        const htmlCard = card as HTMLElement
        const cardIndex = parseInt(htmlCard.getAttribute('data-project-index') || '0')
        const isEven = cardIndex % 2 === 0
        const opacityCard = Math.max(0, Math.min(1, sectionProgress * 1.5))
        const translateX = isEven 
          ? (1 - sectionProgress) * 100 // From left
          : (1 - sectionProgress) * -100 // From right
        
        htmlCard.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
        htmlCard.style.opacity = opacityCard.toString()
        htmlCard.style.transform = `translateX(${translateX}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories: ProjectCategory[] = ['school', 'work', 'personal']

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px bg-gray-600 w-16"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-400">Featured Projects</h2>
            <div className="h-px bg-gray-600 w-16"></div>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A mix of professional work, freelance projects, and personal builds</p>
        </div>

        <div ref={categoriesRef}>
          {categories.map(cat => {
            const cfg = categoryConfig[cat]
            const projects = portfolio.projects.filter((p: Project) => p.category === cat)
            if (projects.length === 0) return null

            return (
              <div key={cat} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 border border-gray-600">
                    <i className={`${cfg.icon} text-gray-400 text-lg`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{cfg.label}</h3>
                  <span className="text-gray-500 text-sm font-medium">({projects.length})</span>
                  <div className="flex-1 h-px bg-gray-600 ml-2"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((p: Project, index: number) => (
                    <ProjectCard key={p.id} p={p} index={index} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}