import { getContactData } from './Contact'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const data = getContactData()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)

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

      // Opacity and parallax effect for email
      if (emailRef.current) {
        const opacityEmail = Math.max(0, Math.min(1, sectionProgress * 1.8))
        emailRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        emailRef.current.style.opacity = opacityEmail.toString()
        emailRef.current.style.transform = `translateY(${(1 - sectionProgress) * 30}px)`
      }

      // Opacity and parallax effect for socials
      if (socialsRef.current) {
        const opacitySocials = Math.max(0, Math.min(1, sectionProgress * 1.5))
        socialsRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        socialsRef.current.style.opacity = opacitySocials.toString()
        socialsRef.current.style.transform = `translateY(${(1 - sectionProgress) * 40}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <div ref={headerRef} className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px bg-gray-600 w-16"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-400">
              Get in Touch
            </h2>
            <div className="h-px bg-gray-600 w-16"></div>
          </div>
          <p className="text-gray-400 mt-4">Have a project in mind? Let's build something great together.</p>
        </div>

        <div ref={emailRef} className="mb-6">
          <a 
            href={`mailto:${data.email}`} 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-800 text-white font-bold text-lg hover:bg-gray-700 transition-all"
          >
            <i className="fa-solid fa-envelope"></i>
            {data.email}
          </a>
        </div>

        <div ref={socialsRef} className="flex flex-col items-center gap-4 mt-8">
          <a 
            href={data.linkedin} 
            target="_blank" 
            rel="noopener" 
            className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gray-800 border border-gray-600 hover:border-gray-400 hover:bg-gray-700 transition-all w-full justify-center"
          >
            <i className="fa-brands fa-linkedin text-gray-400 group-hover:text-white transition"></i>
            <span className="text-gray-300 group-hover:text-white font-medium text-sm">LinkedIn</span>
          </a>
          
          <a 
            href={`tel:${data.phone}`} 
            className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gray-800 border border-gray-600 hover:border-gray-400 hover:bg-gray-700 transition-all w-full justify-center"
          >
            <i className="fa-solid fa-phone text-gray-400 group-hover:text-white transition"></i>
            <span className="text-gray-300 group-hover:text-white font-medium text-sm">{data.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}