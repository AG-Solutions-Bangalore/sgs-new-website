import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    profession: "Business Owner",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
    rating: 5,
    description:
      "The Samyukt Gujarati Samaj has been instrumental in keeping our cultural heritage alive. The events they organize bring our community together beautifully.",
  },
  {
    id: 2,
    name: "Priya Shah",
    profession: "Software Engineer",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
    rating: 5,
    description:
      "Being part of this community has enriched my life immensely. The warmth and sense of belonging I feel here is truly exceptional.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    profession: "Entrepreneur",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg",
    rating: 5,
    description:
      "From cultural celebrations to social gatherings, every event is organized with dedication. This community truly feels like home.",
  },
  {
    id: 4,
    name: "Meera Desai",
    profession: "Teacher",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-4.jpg",
    rating: 5,
    description:
      "The dedication to preserving traditions while embracing modern values is commendable. My family looks forward to every event.",
  },
  {
    id: 5,
    name: "Suresh Modi",
    profession: "Doctor",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
    rating: 5,
    description:
      "A wonderful community that keeps our Gujarati culture thriving. The support and friendship here are invaluable to our family.",
  },
  {
    id: 6,
    name: "Kavita Joshi",
    profession: "Architect",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
    rating: 5,
    description:
      "Outstanding organization and genuine care for community members. Every event is a celebration of our rich heritage and unity.",
  },
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleCards = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100/50 relative overflow-hidden">
      {/* Static Background Blobs (Optimized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-20 transform-gpu"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(253,186,116,0) 70%)' }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-15 transform-gpu"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.8) 0%, rgba(253,164,175,0) 70%)' }}
        />
      </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <AnimateOnScroll type="fade-down" delay={0.15}>
            <div className="text-center mb-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/80  text-orange-600 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide border border-orange-200 shadow-sm"
              >
                <Star className="w-4 h-4 fill-orange-500" />
                TESTIMONIALS
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 mt-6 tracking-tight">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Members Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Real stories and heartfelt words from our vibrant community
              </p>
            </div>
          </AnimateOnScroll>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleCards.map((testimonial, index) => (
                  <AnimateOnScroll
                    key={testimonial.id}
                    type="fade-up"
                    delay={index * 0.15}
                  >
                    <div className="group relative bg-white rounded-[32px] p-8 h-full flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] transition-shadow duration-300 border border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                      {/* Quote Mark Background */}
                      <div className="absolute -top-4 right-4 text-orange-500/10 text-9xl font-serif pointer-events-none group-hover:scale-110 transition-transform duration-500">
                        "
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-orange-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                        "{testimonial.description}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 relative z-10">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>

                        <div>
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-orange-500 font-semibold text-sm">
                            {testimonial.profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <AnimateOnScroll type="zoom-in" delay={0.2}>
            <div className="flex items-center justify-center gap-8 mt-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                className="bg-white/80  hover:bg-orange-500 text-gray-700 hover:text-white p-4 rounded-2xl shadow-lg transition-all border border-white hover:border-orange-500 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex gap-4">
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "w-12 h-3 bg-gradient-to-r from-orange-500 to-orange-400 shadow-md"
                        : "w-3 h-3 bg-gray-300 hover:bg-orange-400/50"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                className="bg-white/80  hover:bg-orange-500 text-gray-700 hover:text-white p-4 rounded-2xl shadow-lg transition-all border border-white hover:border-orange-500 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </AnimateOnScroll>
        </div>
    </section>
  );
}
