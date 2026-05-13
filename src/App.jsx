import { Route, Routes } from 'react-router-dom'
import CommunityIntro from './components/CommunityIntro'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import MissionSection from './components/MissionSection'
import OurEventsSection from './components/OurEventsSection'
import OurFeaturesSection from './components/OurFeaturesSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import EventPage from './components/EventPage'
import GalleryPage from './components/GalleryPage'
import ContactPage from './components/ContactPage'
import RegisterPage from './components/RegisterPage'

function Home() {
  return (
    <>
      <WelcomeSection />
      <CommunityIntro />
      <MissionSection/>
      <OurEventsSection/>
      <OurFeaturesSection/>
      <TeamSection/>
      <TestimonialsSection />
      <Footer/>
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
