import { portfolio } from '../data/portfolio'

export function renderNavbar(): string {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills & Journey', href: '#skills-journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return `
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-gray-600">
    <div class="w-full px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 group select-none">
        <img src="${portfolio.logo}" alt="PoPi" class="w-10 h-10 rounded-full ring-2 ring-gray-600 group-hover:ring-gray-400 transition" />
        <span class="text-white font-bold text-lg tracking-tight">${portfolio.siteName}</span>
      </a>
      <div class="hidden md:flex items-center gap-8">
        ${navLinks.map(l => `<a href="${l.href}" class="text-sm font-medium text-gray-300 hover:text-white transition relative group">${l.label}<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span></a>`).join('')}
      </div>
      <a href="#contact" class="px-5 py-2 rounded-full bg-gray-800 text-white text-sm font-bold hover:bg-gray-700 transition-all">
        Let's Talk
      </a>
    </div>
  </nav>`
}
