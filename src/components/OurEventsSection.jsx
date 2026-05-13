import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const animationStyles = `
  @keyframes bounceInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    60% {
      opacity: 1;
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(4px);
    }
    100% {
      transform: translateY(0);
    }
  }

`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = animationStyles
  document.head.appendChild(style)
}

function OurEventsSection() {
  const events = [
    {
      id: 1,
      image: 'https://samyuktgujaratisamaj.com/draft1/img/service-1.jpg',
      title: 'Air Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      link: '#',
    },
    {
      id: 2,
      image: 'https://samyuktgujaratisamaj.com/draft1/img/service-2.jpg',
      title: 'Ocean Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      link: '#',
    },
    {
      id: 3,
      image: 'https://samyuktgujaratisamaj.com/draft1/img/service-3.jpg',
      title: 'Road Freight',
      description: 'Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.',
      link: '#',
    },
  ]

  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!cardRefs.current.length) return

    cardRefs.current.forEach((card, index) => {
      if (!card) return
      if (isVisible) {
        card.style.animation = 'none'
        void card.offsetWidth
        card.style.animation = `bounceInUp 1.5s ease-out ${index * 0.2}s both`
      } else {
        card.style.animation = 'none'
      }
    })
  }, [isVisible, events.length])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-[#31c4f3]">
            Upcoming Events
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#060315] lg:text-5xl">
            Our Events
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#555555]">
            Our calendar is filled with celebrations, cultural programs, social gatherings, and
            charity drives. From Navratri and Diwali to educational workshops and family picnics,
            Samyukt Gujarati Samaj ensures there is something for everyone. Stay updated and be a
            part of our upcoming events.
          </p>
        </div>

        {/* Events Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#060315] transition-colors duration-200 group-hover:text-[#31c4f3]">
                  {event.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#555555]">
                  {event.description}
                </p>

                {/* Read More Link */}
                <a
                  href={event.link}
                  className="inline-flex items-center text-base font-semibold text-[#FF3E41] transition-all duration-200 hover:text-[#d72d30] hover:gap-2 gap-1"
                >
                  Read More
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEventsSection
