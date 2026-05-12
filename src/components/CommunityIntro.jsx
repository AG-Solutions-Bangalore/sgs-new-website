import { Link } from 'react-router-dom'

function CommunityIntro() {
  return (
    <section className="bg-white py-6 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-35 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Image with Overlapping Icon */}
        <div className="relative mr-9 ml-2 w-[500px]">
          <div className="relative w-full h-[300px] overflow-hidden rounded-lg sm:h-[300px] lg:h-[500px]">
            <img
              src="/about.jpg"
              alt="Samyukt Gujarati Samaj members"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

        {/* Right Side: Content */}
        <div className="lg:pl-8">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-[#31c4f3]">
            About
          </span>
          <h2 className="mb-8 text-4xl font-extrabold leading-tight text-[#060315] lg:text-5xl">
            Samyukt Gujarati Samaj
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#555555] text-justify">
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
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-block bg-[#ff3e41] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#d72d30] hover:shadow-xl active:scale-95"
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
