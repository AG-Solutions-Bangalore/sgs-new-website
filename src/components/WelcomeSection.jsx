import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/slider/banner1.jpg',
    alt: 'Samyukt Gujarati Samaj banner',
    eyebrow: 'Welcome to',
    title: 'Samyukt Gujarati Samaj',
    description: 'Preserving Traditions, Connecting Hearts.',
  },
  {
    image: '/slider/banner2.jpg',
    alt: 'Samyukt Gujarati Samaj community banner',
    eyebrow: 'Team',
    title: 'Sardar Patel Bhavan',
    description: 'Traditional Gujarati Architecture',
  },
]

function WelcomeSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = slides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section className="bg-white">
      <div className="relative mb-10 h-[420px] overflow-hidden sm:h-[520px] lg:h-[680px]">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,3,21,0.78)_0%,rgba(6,3,21,0.54)_42%,rgba(6,3,21,0.22)_100%) ]" />

        <div className="absolute inset-0 flex items-center pt-70 ">
          <div className="mx-auto w-full max-w-[1320px] px-5">
            <div className="max-w-[760px]  text-gray-900">
              <p className="mb-4 inline-flex border-l-4 border-[#0d6efd] bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] backdrop-blur-sm">
                {currentSlide.eyebrow}
              </p>
              <h1 className="max-w-[820px] text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                {currentSlide.title}
              </h1>
              <p className="mt-5 max-w-[400px] text-lg leading-8   bg-[#ff3e41] sm:text-xl">
                {currentSlide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center justify-center bg-[#0d6efd] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition-colors hover:bg-[#084db3]"
                >
                  Read More
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12  items-center justify-center bg-[#ff3e41] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_14px_34px_rgba(255,62,65,0.28)] transition-colors hover:bg-[#d72d30]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous banner"
          onClick={showPreviousSlide}
          className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-white/10 text-4xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-[#0d6efd] md:flex"
        >
          &#8249;
        </button>
        <button
          type="button"
          aria-label="Next banner"
          onClick={showNextSlide}
          className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-white/10 text-4xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-[#0d6efd] md:flex"
        >
          &#8250;
        </button>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show banner ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? 'w-9 bg-[#0d6efd]' : 'w-2.5 bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>    

       
    </section>
  )
}

export default WelcomeSection
