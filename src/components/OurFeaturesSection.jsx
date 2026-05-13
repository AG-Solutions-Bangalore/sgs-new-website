function OurFeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Worldwide Service',
      description:
        'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.',
      icon: '🌍',
      color: 'bg-[#31c4f3]',
    },
    {
      id: 2,
      title: 'On Time Delivery',
      description:
        'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.',
      icon: '⏱️',
      color: 'bg-[#FF3E41]',
    },
    {
      id: 3,
      title: '24/7 Telephone Support',
      description:
        'Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.',
      icon: '📞',
      color: 'bg-[#00A651]',
    },
  ]

  return (
    <section className="bg-[#0a1724] py-16 text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block uppercase tracking-[0.35em] text-sm font-semibold text-[#6dd0ff]">
            Our Features
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            We Are Trusted Logistics Company Since 1990
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#c8d7e4] sm:text-lg">
            Discover a premium logistics experience with global reach, reliable delivery, and support you can trust around the clock.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.75)] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
              style={{ animation: `fadeInUp 0.8s ease-out ${(index + 1) * 0.15}s both` }}
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl ${feature.color} text-3xl shadow-lg shadow-black/20`}>
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#c8d7e4]">{feature.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6dd0ff] transition-all duration-200 group-hover:gap-3">
                Learn More
                <span aria-hidden="true">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default OurFeaturesSection
