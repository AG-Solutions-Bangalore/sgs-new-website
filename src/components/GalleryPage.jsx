function GalleryPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-[1320px] px-6 py-24 text-center">
          <span className="inline-block text-sm uppercase tracking-[0.35em] text-[#38bdf8]">
            Gallery
          </span>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">
            Our Visual Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Browse our gallery for highlights from past festivals, community meetups, cultural performances, and memorable moments.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="overflow-hidden rounded-[28px] bg-slate-100 shadow-lg shadow-slate-200/40">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(https://samyuktgujaratisamaj.com/draft1/img/service-${(idx % 3) + 1}.jpg)` }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
