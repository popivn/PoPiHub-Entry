import { portfolio, type Project, type ProjectCategory } from '../data/portfolio'

const categoryConfig: Record<ProjectCategory, { label: string; icon: string }> = {
  school: { label: 'School Projects', icon: 'fa-solid fa-graduation-cap' },
  work: { label: 'Work Projects', icon: 'fa-solid fa-briefcase' },
  personal: { label: 'Personal Projects', icon: 'fa-solid fa-user-astronaut' },
}

function renderProjectCard(p: Project): string {
  return `
  <div class="group relative rounded-2xl bg-gray-800 border border-gray-600 hover:border-gray-400 transition-all duration-300 overflow-hidden ${p.highlight ? 'ring-1 ring-gray-400' : ''}">
    ${p.highlight ? '<div class="absolute top-0 right-0 px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-bl-xl"><i class="fa-solid fa-star mr-1"></i>HIGHLIGHT</div>' : ''}

    <div class="p-6">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-xl font-bold text-white group-hover:text-gray-300 transition">${p.title}</h3>
      </div>
      <p class="text-gray-400 text-sm leading-relaxed mb-4 min-h-[80px]">${p.description}</p>

      <div class="flex flex-wrap gap-2 mb-4">
        ${p.tech.map(t => `<span class="px-2.5 py-1 rounded-md bg-gray-700 border border-gray-600 text-gray-300 text-xs font-medium">${t}</span>`).join('')}
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-gray-600">
        <span class="text-gray-500 text-xs font-medium">${p.date}</span>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-bold transition group-hover:gap-2.5">
          Visit
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>` : ''}
      </div>
    </div>
  </div>`
}

export function renderProjects(): string {
  const categories: ProjectCategory[] = ['school', 'work', 'personal']

  return `
  <section id="projects" class="relative py-24 px-6 bg-black">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center">
        <div class="flex items-center justify-center gap-4 mb-3">
          <div class="h-px bg-gray-600 w-16"></div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-400">Featured Projects</h2>
          <div class="h-px bg-gray-600 w-16"></div>
        </div>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">A mix of professional work, freelance projects, and personal builds</p>
      </div>

      ${categories.map(cat => {
        const cfg = categoryConfig[cat]
        const projects = portfolio.projects.filter((p: Project) => p.category === cat)
        if (projects.length === 0) return ''

        return `
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 border border-gray-600">
              <i class="${cfg.icon} text-gray-400 text-lg"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">${cfg.label}</h3>
            <span class="text-gray-500 text-sm font-medium">(${projects.length})</span>
            <div class="flex-1 h-px bg-gray-600 ml-2"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${projects.map(renderProjectCard).join('')}
          </div>
        </div>`
      }).join('')}
    </div>
  </section>`
}
