import Footer from "./Footer"

function ContactPage() {
  return (
    <>
    
    <main className="bg-white min-h-screen">
      <section className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-lg shadow-slate-200/40">
            <span className="text-sm uppercase tracking-[0.35em] text-[#31c4f3]">Contact</span>
            <h1 className="text-4xl font-extrabold text-slate-950">Get in Touch</h1>
            <p className="text-base leading-relaxed text-slate-600">
              Reach out for event bookings, community collaborations, or general support. We are here to help you connect with our Gujarati community.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">+91 62876 78767</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">info@samyuktgujaratisamaj.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-lg shadow-slate-200/40">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Name</label>
                <input className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Email</label>
                <input className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={5} className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20" />
              </div>
              <button className="inline-flex w-full justify-center rounded-3xl bg-[#31c4f3] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#22a4ef]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default ContactPage
