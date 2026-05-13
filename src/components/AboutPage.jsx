import CommunityIntro from "./CommunityIntro"
import Footer from "./Footer"
import MissionSection from "./MissionSection"
import TeamSection from "./TeamSection"
import { Link } from 'react-router-dom'


function AboutPage() {
  return (
    <>
      <main className="relative min-h-[60vh] overflow-hidden bg-black text-white">
        <section
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: 'url(https://samyuktgujaratisamaj.com/draft1/img/service-1.jpg)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto flex min-h-[60vh] max-w-[1020px] items-center px-6 py-20 lg:px-12">
          <div className="max-w-3xl">
            <nav className="mb-4 text-sm uppercase tracking-[0.35em] text-[#6dd0ff]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              About Us
            </h1>
          </div>
        </div>
      </main>

      <CommunityIntro/>
      <MissionSection/>
      <TeamSection/>
      <Footer/>
    </>
  )
}

export default AboutPage
