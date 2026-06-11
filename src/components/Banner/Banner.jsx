import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideDuration = 6000;

  const slides = [
    {
      id: 1,
      tag: "Welcome to",
      title: "Samyukt Gujarati Samaj",
      subtitle:
        "A united community celebrating culture, values, and togetherness — connecting 10,000+ members across Bengaluru.",
      image: "https://samyuktgujaratisamaj.com/draft1/img/slider/banner1.jpg",
      cta: "Become a Member",
      link: "/membership",
    },
    {
      id: 2,
      tag: "Our Heritage",
      title: "Sardar Patel Bhavan",
      subtitle:
        "A landmark of Gujarati pride in Bengaluru — hosting cultural events, community gatherings, and celebrations since decades.",
      image: "https://samyuktgujaratisamaj.com/draft1/img/slider/banner2.jpg",
      cta: "View Gallery",
      link: "/gallery",
    },
    {
      id: 3,
      tag: "Community",
      title: "Preserving Traditions",
      subtitle:
        "Engage in meaningful cultural programs, festivals, and social initiatives that keep the spirit of Gujarat alive.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=800&fit=crop",
      cta: "Explore Programs",
      link: "/about",
    },
    {
      id: 4,
      tag: "Together",
      title: "Stronger As One",
      subtitle:
        "From Navratri to Uttarayan — every celebration is a reason to come together, share joy, and build lasting bonds.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=800&fit=crop",
      cta: "Get Involved",
      link: "/contact",
    },
  ];

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    // Resume auto-play after 12 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 12000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      slideDuration,
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoPlay();
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden bg-gray-950 group font-sans">
      {/* ── Background Slides with Ken Burns Effect ── */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-[10000ms] ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.08)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* ── Overlays for depth and contrast ── */}
      <div className="absolute inset-0 z-20 bg-black/40" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* ── Main Content ── */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Glassmorphism Card */}
              <div className=" bg-white/5 border border-white/10 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start">
                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <span className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                    <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-orange-400">
                      {slides[currentSlide].tag}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1] font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70 drop-shadow-sm"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-10"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                  >
                    <Link
                      to={slides[currentSlide].link}
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.5)]"
                    >
                      <span className="relative z-10">
                        {slides[currentSlide].cta}
                      </span>
                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/about"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4  bg-white/5 border border-white/20 text-white text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    >
                      <span>Learn More</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation Arrows (Glass Style) ── */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full  bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full  bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Floating Bottom Navigation Pill ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className=" bg-black/40 border border-white/10 rounded-full px-6 py-4 flex items-center gap-6 shadow-2xl">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative overflow-hidden rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentSlide
                    ? "w-12 h-2.5 bg-white/20"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              >
                {/* Active Progress Fill */}
                {index === currentSlide && isAutoPlaying && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: slideDuration / 1000,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                  />
                )}
                {/* Fill if paused on active slide */}
                {index === currentSlide && !isAutoPlaying && (
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="w-[1px] h-4 bg-white/30" />

          {/* Slide Counter */}
          <div className="text-white text-xs sm:text-sm font-bold tracking-widest flex items-center gap-1.5">
            <span className="text-orange-400">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-white/40">/</span>
            <span className="text-white/80">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
