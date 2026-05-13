function RegisterPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      <section className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/40">
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-[#31c4f3]">Register</span>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-950">Join Samyukt Gujarati Samaj</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Complete the form below to register for membership, events, and community updates.
            </p>
          </div>

          <form className="grid gap-6">
            <input className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" placeholder="Full Name" />
            <input className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" placeholder="Email Address" />
            <input className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" placeholder="Phone Number" />
            <textarea rows={4} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" placeholder="Tell us what you are interested in" />
            <button className="mx-auto inline-flex rounded-3xl bg-[#31c4f3] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#22a4ef]">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
