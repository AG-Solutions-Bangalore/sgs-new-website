function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sanjay Patel',
      role: 'Event Coordinator',
      company: 'Gujarati Unity Network',
      quote:
        'Samyukt Gujarati Samaj delivered a flawless experience. Their team supported every detail from logistics to cultural programming, and the result was unforgettable.',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-3.jpg',
    },
    {
      id: 2,
      name: 'Neha Shah',
      role: 'Community Leader',
      company: 'Bengaluru Gujarati Forum',
      quote:
        'The community support and polished event planning made our festival shine. Their care and professionalism are truly top-tier.',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-2.jpg',
    },
    {
      id: 3,
      name: 'Rohan Desai',
      role: 'Business Partner',
      company: 'Heritage Events',
      quote:
        'Every interaction felt personal and reliable. I highly recommend Samyukt Gujarati Samaj for anyone seeking premium cultural services.',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-1.jpg',
    },
  ]

  return (
    <section className="bg-[#7d9ec0] py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.35em] text-[#31c4f3]">
            Testimonial
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#07102e] sm:text-5xl">
            Our Clients Say!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#52607a] sm:text-lg">
            Trusted by community leaders, event organizers, and members alike, our work creates memorable experiences with heart and precision.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_24px_80px_-45px_rgba(15,23,42,0.15)] transition duration-500 hover:-translate-y-2"
              style={{ animation: `fadeInUp 0.7s ease-out ${index * 0.15}s both` }}
            >
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-50 w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-6 py-4 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-black">{item.role}</p>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
              </div>
              <div className="space-y-4 p-8">
                <p className="text-base leading-relaxed text-[#334155]">“{item.quote}”</p>
                <div className="rounded-3xl bg-[#eef2ff] px-4 py-3 text-sm font-semibold text-[#334155]">
                  {item.company}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection
