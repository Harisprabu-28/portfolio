import { IntroProvider } from './context/IntroContext'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <IntroProvider>
      <div className="min-h-screen bg-bg text-text-primary overflow-x-hidden">
        <IntroAnimation />
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Certifications />
          <div className="section-divider" />
          <Hackathons />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  )
}
