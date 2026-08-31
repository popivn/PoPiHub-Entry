import { getHeroData } from './hero-data'
import './hero.css'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const data = getHeroData()
  const brandRef = useRef<HTMLHeadingElement>(null)
  const professionRef = useRef<HTMLHeadingElement>(null)
  const heroBg1Ref = useRef<HTMLImageElement>(null)
  const heroBg2Ref = useRef<HTMLImageElement>(null)
  const heroBg3Ref = useRef<HTMLImageElement>(null)
  const heroMainRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollSpeed = 0.4

      if (brandRef.current && professionRef.current) {
        if (scrollY > 50) {
          brandRef.current.classList.add('scrolled')
          professionRef.current.classList.add('scrolled')
        } else {
          brandRef.current.classList.remove('scrolled')
          professionRef.current.classList.remove('scrolled')
        }
      }

      // Calculate opacity based on scroll position
      const maxScroll = 500
      const scrollProgress = Math.min(scrollY / maxScroll, 1)

      // Disable CSS animations once and keep them disabled
      if (scrollY > 10) {
        if (heroBg1Ref.current && heroBg1Ref.current.style.animation !== 'none') {
          heroBg1Ref.current.style.animation = 'none'
        }
        if (heroBg2Ref.current && heroBg2Ref.current.style.animation !== 'none') {
          heroBg2Ref.current.style.animation = 'none'
        }
        if (heroBg3Ref.current && heroBg3Ref.current.style.animation !== 'none') {
          heroBg3Ref.current.style.animation = 'none'
        }
        if (heroMainRef.current && heroMainRef.current.style.animation !== 'none') {
          heroMainRef.current.style.animation = 'none'
        }
      }

      // Opacity and parallax for sub images (disappear in order)
      if (heroBg1Ref.current) {
        const opacity1 = Math.max(0, 1 - scrollProgress * 1.5)
        heroBg1Ref.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        heroBg1Ref.current.style.opacity = opacity1.toString()
        heroBg1Ref.current.style.transform = `translateY(${scrollY * scrollSpeed * 0.5}px)`
      }
      if (heroBg2Ref.current) {
        const opacity2 = Math.max(0, 1 - scrollProgress * 1.2)
        heroBg2Ref.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        heroBg2Ref.current.style.opacity = opacity2.toString()
        heroBg2Ref.current.style.transform = `translateY(${scrollY * scrollSpeed * 0.8}px)`
      }
      if (heroBg3Ref.current) {
        const opacity3 = Math.max(0, 1 - scrollProgress * 0.9)
        heroBg3Ref.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        heroBg3Ref.current.style.opacity = opacity3.toString()
        heroBg3Ref.current.style.transform = `translateY(${scrollY * scrollSpeed * 1.2}px)`
      }

      // Main image disappears last
      if (heroMainRef.current) {
        const opacityMain = Math.max(0, 1 - scrollProgress * 0.5)
        heroMainRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.1s ease-out'
        heroMainRef.current.style.opacity = opacityMain.toString()
        heroMainRef.current.style.transform = `translateY(${-scrollY * scrollSpeed * 1.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-20 left-0 right-0 text-center z-20">
        <div className="w-full px-8 py-4">
          <h1 ref={brandRef} className="text-4xl md:text-6xl font-bold tracking-wider text-gray-400 hero-text-fade hero-text-scroll select-none">
            {data.brand}
          </h1>
          <h2 ref={professionRef} className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-gray-200 hero-text-fade-delay hero-text-scroll select-none">
            {data.profession}
          </h2>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[50%] w-full">
        <img ref={heroBg1Ref} src={data.heroImage} alt="" className="hero-bg hero-bg-fade hero-bg-1-anim absolute inset-0 w-full h-full object-cover shadow-2xl shadow-black" />
        <div className="absolute inset-0 bg-black opacity-35" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%]">
        <img ref={heroBg2Ref} src={data.heroImage} alt="" className="hero-bg hero-bg-fade hero-bg-2-anim absolute inset-0 w-full h-full object-cover shadow-2xl shadow-black" />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[90%]">
        <img ref={heroBg3Ref} src={data.heroImage} alt="" className="hero-bg hero-bg-fade hero-bg-3-anim absolute inset-0 w-full h-full object-cover shadow-2xl shadow-black" />
        <div className="absolute inset-0 bg-black opacity-15" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <img ref={heroMainRef} src={data.mainImage} alt={data.name} className="hero-main hero-main-fade max-h-[35%] max-w-[60%] w-auto object-contain" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <i className="fa-solid fa-chevron-down text-2xl" />
      </div>
    </section>
  )
}
