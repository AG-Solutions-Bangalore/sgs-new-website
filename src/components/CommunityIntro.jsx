import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// CSS Animation Styles
const animationStyles = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out 0.15s forwards;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}

function CommunityIntro() {
  const sectionRef = useRef(null)
  const leftImageRef = useRef(null)
  const rightContentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Component is visible - add animations
            if (leftImageRef.current) {
              leftImageRef.current.classList.remove('animate-slide-in-left')
              // Trigger reflow to restart animation
              void leftImageRef.current.offsetWidth
              leftImageRef.current.classList.add('animate-slide-in-left')
            }
            if (rightContentRef.current) {
              rightContentRef.current.classList.remove('animate-slide-in-right')
              // Trigger reflow to restart animation
              void rightContentRef.current.offsetWidth
              rightContentRef.current.classList.add('animate-slide-in-right')
            }
          } else {
            // Component left viewport - remove animations so they can replay
            if (leftImageRef.current) {
              leftImageRef.current.classList.remove('animate-slide-in-left')
            }
            if (rightContentRef.current) {
              rightContentRef.current.classList.remove('animate-slide-in-right')
            }
          }
        })
      },
      { threshold: 0.2 }
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
  return (
    <section ref={sectionRef} className="bg-white py-6 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-35 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Image with Overlapping Icon */}
        <div ref={leftImageRef} className="relative mr-9 ml-2 w-[500px]">
          <div className="relative w-full h-[300px] overflow-hidden rounded-lg sm:h-[300px] lg:h-[500px]">
            <img
              src="/about.jpg"
              alt="Samyukt Gujarati Samaj members"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

        {/* Right Side: Content */}
        <div ref={rightContentRef} className="lg:pl-8">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-[#31c4f3]">
            About
          </span>
          <h2 className="mb-2 text-4xl font-extrabold leading-tight text-[#060315] lg:text-5xl">
            Samyukt Gujarati Samaj
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-[#555555] text-justify">
            <p>
              A united community celebrating our culture, values, and togetherness. We bring
              Gujaratis living away from home closer through social, cultural, and charitable
              activities. Join us in preserving traditions while creating new bonds of friendship
              and growth.
            </p>
            <p>
              Samyukt Gujarati Samaj is a vibrant community organization formed with the vision of
              uniting Gujaratis under one platform. Our mission is to promote cultural heritage,
              strengthen community relationships, and support members in social, educational, and
              charitable initiatives. With regular gatherings, festivals, and programs, we aim to
              keep the spirit of Gujarat alive wherever we are.
            </p>
          </div>
          <div className="mt-5">
            <Link
              to="/about"
              className="inline-block bg-[#ff3e41] px-4 py-2 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#d72d30] hover:shadow-xl active:scale-95"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityIntro
