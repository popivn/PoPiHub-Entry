import { portfolio } from './portfolio'

export interface AboutData {
  fullName: string
  location: string
  slogan: string
  skills: {
    label: string
    icon: string
    color: string
  }[]
}

export function getAboutData(): AboutData {
  return {
    fullName: portfolio.fullName,
    location: portfolio.location,
    slogan: portfolio.tagline,
    skills: [
      {
        label: 'Laravel Expert',
        icon: 'fa-brands fa-laravel',
        color: 'fuchsia',
      },
      {
        label: 'Node.js Expert',
        icon: 'fa-brands fa-node-js',
        color: 'orange',
      },
      {
        label: 'Learning .NET',
        icon: 'fa-solid fa-graduation-cap',
        color: 'purple',
      },
      {
        label: 'AI-Assisted Dev',
        icon: 'fa-solid fa-robot',
        color: 'pink',
      },
    ],
  }
}
