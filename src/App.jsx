
import NavBar from './components/NavBar.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/hero.jsx'
import LogoSection from './sections/LogoSection.jsx'
import ShowCaseSection from './sections/ShowCaseSection.jsx'


const App = () => {
  return (
   <>
    <NavBar/>
    <Hero/>
    <ShowCaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>

   </>
  )
}

export default App