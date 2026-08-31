import { portfolio } from '../data/portfolio'

export interface HeroData {
  name: string
  logo: string
  heroImage: string
  mainImage: string
  tagline: string
  brand: string
  profession: string
  brandGradient: string
  buttons: {
    label: string
    href: string
    className: string
  }[]
}

export function getHeroData(): HeroData {
  return {
    name: portfolio.name,
    logo: portfolio.logo,
    heroImage: '/bran/Gemini_Generated_Image_xbkptwxbkptwxbkp.png',
    mainImage: '/bran/0895adbf-be80-4485-a3c2-b1d531cc1b1a.jpg',
    tagline: portfolio.tagline,
    brand: 'PoPi',
    profession: 'Web Developer',
    brandGradient: 'bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-400 bg-clip-text text-transparent',
    buttons: [
      {
        label: 'View My Work',
        href: '#projects',
        className: 'px-8 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all',
      },
      {
        label: 'Get in Touch',
        href: '#contact',
        className: 'px-8 py-3.5 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all',
      },
    ],
  }
}
