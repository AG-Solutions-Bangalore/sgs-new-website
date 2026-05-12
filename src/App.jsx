import { Route, Routes } from 'react-router-dom'
import CommunityIntro from './components/CommunityIntro'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'

const pages = {
  home: 'Home',
  about: 'About',
  event: 'Event',
  gallery: 'Gallery',
  contact: 'Contact',
  register: 'Register',
}

function Page({ title }) {
  return (
    <main className="mx-auto w-full max-w-[1320px] px-5 py-12 text-left">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    </main>
  )
}

function Home() {
  return (
    <>
      <WelcomeSection />
      <CommunityIntro />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page title={pages.about} />} />
        <Route path="/event" element={<Page title={pages.event} />} />
        <Route path="/gallery" element={<Page title={pages.gallery} />} />
        <Route path="/contact" element={<Page title={pages.contact} />} />
        <Route path="/register" element={<Page title={pages.register} />} />
      </Routes>
    </>
  )
}

export default App
