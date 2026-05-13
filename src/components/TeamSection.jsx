function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Full Name',
      role: 'Designation',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg',
    },
    {
      id: 2,
      name: 'Full Name',
      role: 'Designation',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg',
    },
    {
      id: 3,
      name: 'Full Name',
      role: 'Designation',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg',
    },
    {
      id: 4,
      name: 'Full Name',
      role: 'Designation',
      image: 'https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-[#306cb6] via-[#0b1625] to-[#102238] py-16 text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.35em] text-[#6dd0ff]">
            Our Team
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Expert Team Members
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#c8d7e4] sm:text-lg">
            Meet the strong team behind Samyukt Gujarati Samaj — experienced professionals dedicated to creating memorable events, trusted services, and community impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_90px_-55px_rgba(0,0,0,0.75)] transition duration-500 hover:-translate-y-2 hover:border-white/20"
              style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
            >
              <div className="overflow-hidden rounded-t-[20px] bg-[#0f1e34]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-50 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#8ab4d5]">{member.role}</p>
                <p className="mt-5 text-sm leading-relaxed text-[#c8d7e4]">
                  A trusted expert ensuring every event and service runs smoothly, with attention to quality and community values.
                </p>
              </div>
            </article>
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

export default TeamSection
