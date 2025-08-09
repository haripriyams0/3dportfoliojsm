
import NavBar from './components/NavBar.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import LogoSection from './sections/LogoSection.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
   <>
    <NavBar/>
    <Hero/>
    <ShowCaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <SkillsSection/>
    <ExperienceSection/>
    <TestimonialsSection/>
    <ContactSection/>
    <Footer/>

   </>
  )
}

export default App
