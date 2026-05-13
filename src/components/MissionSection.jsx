function MissionSection() {
  const stats = [
    {
      icon: '👥',
      number: '1234',
      label: 'Happy Clients',
      bgColor: 'bg-[#FF3E41]',
    },
    {
      icon: '📦',
      number: '1234',
      label: 'Complete Shipments',
      bgColor: 'bg-[#31C4F3]',
    },
    {
      icon: '⭐',
      number: '1234',
      label: 'Customer Reviews',
      bgColor: 'bg-[#00A651]',
    },
  ]

  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Mission Content */}
        <div className="space-y-6">
          <div>
            <span className="mb-2 inline-block text-xl font-bold uppercase tracking-widest text-[#31c4f3]">
              Mission
            </span>
            <h2 className="mb-6 text-5xl font-extrabold leading-tight text-[#060315] lg:text-5xl">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-[#555555] text-justify">
              To preserve, promote, and celebrate the cultural heritage of the Gujarati community
              while offering a welcoming space for social and religious activities in Bengaluru.
            </p>
          </div>

          {/* Call for Query Section */}
          <div className="mt-8 flex items-start gap-4 rounded-lg bg-gray-50 p-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded bg-[#FF3E41]">
              <span className="text-2xl">☎️</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#060315]">Call for any query!</h4>
              <a
                href="tel:+916287678767"
                className="mt-1 text-2xl font-bold text-[#830608] transition-colors duration-200 hover:text-[#d72d30]"
              >
                +91 62876 78767
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Stats Cards */}
        <div className="grid gap-3 lg:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} transform rounded-lg px-8 py-8 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className="mb-3 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-20 text-2xl">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl font-extrabold lg:text-5xl">{stat.number}</h3>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
