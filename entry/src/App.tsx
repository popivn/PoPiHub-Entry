import { renderNavbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About.tsx'
import SkillsJourney from './components/SkillsJourney'
import { renderProjects } from './components/Projects'
import Contact from './components/Contact.tsx'
import { renderFooter } from './components/Footer'

export default function App() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderNavbar() }} />
      <Hero />
      <About />
      <SkillsJourney />
      <div dangerouslySetInnerHTML={{ __html: renderProjects() }} />
      <Contact />
      <div dangerouslySetInnerHTML={{ __html: renderFooter() }} />
    </>
  )
}
