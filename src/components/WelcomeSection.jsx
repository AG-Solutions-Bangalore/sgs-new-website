import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Slide data – you can extend this array with more slides if needed
const slides = [
  {
    image: '/slider/banner1.jpg',
    alt: 'Samyukt Gujarati Samaj banner',
    eyebrow: 'Welcome to',
    title: 'Samyukt Gujarati Samaj',
    description: 'Preserving Traditions, Connecting Hearts.',
    cta: 'Explore',
    link: '/about',
  },
  {
    image: '/slider/banner2.jpg',
    alt: 'Samyukt Gujarati Samaj community banner',
    eyebrow: 'Team',
    title: 'Sardar Patel Bhavan',
    description: 'Traditional Gujarati Architecture',
    cta: 'Visit',
    link: '/heritage',
  },
];

/**
 * WelcomeSection – a premium mobile‑first carousel.
 *
 * Design goals:
 *   • Full‑width hero image that scales nicely on any device.
 *   • Text overlay with a dark gradient for readability.
 *   • Smooth slide transition (fade) and optional auto‑play.
 *   • Accessible navigation arrows and dot indicators.
 */
export default function WelcomeSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = slides.length;
  const current = slides[activeSlide];

  // Auto‑play – change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  // Manual navigation helpers
  const goToSlide = (index) => setActiveSlide(index);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
        style={{ backgroundImage: `url(${current.image})` }}
        aria-label={current.alt}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <p className="text-sm font-medium tracking-widest uppercase mb-2 opacity-90">
          {current.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {current.title}
        </h1>
        <p className="max-w-md text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
          {current.description}
        </p>
        {current.cta && current.link && (
          <Link
            to={current.link}
            className="inline-block bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            {current.cta}
          </Link>
        )}
      </div>

      {/* Navigation arrows – hidden on very small screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${idx === activeSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
