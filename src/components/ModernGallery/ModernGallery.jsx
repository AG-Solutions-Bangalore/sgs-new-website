import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/1.jpg",
    alt: "Children with laptop",
    category: "Events",
  },
  {
    id: 2,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/2.jpg",
    alt: "Girl with laptop",
    category: "Community",
  },
  {
    id: 3,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/3.jpg",
    alt: "Cat with laptop",
    category: "Fun",
  },
  {
    id: 4,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/4.jpg",
    alt: "Children learning",
    category: "Events",
  },
  {
    id: 5,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/5.jpg",
    alt: "Girl studying",
    category: "Community",
  },
  {
    id: 6,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/6.jpg",
    alt: "Children playing",
    category: "Events",
  },
  {
    id: 7,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/7.jpg",
    alt: "Laptop news",
    category: "News",
  },
  {
    id: 8,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/8.jpg",
    alt: "Cat relaxing8",
    category: "Fun",
  },

  {
    id: 9,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/10.jpg",
    alt: "Cat relaxing10",
    category: "Fun",
  },
  {
    id: 10,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/11.jpg",
    alt: "Cat relaxing11",
    category: "Fun",
  },

];

const categories = ["All", "Events", "Community", "Fun", "News"];

export default function ModernGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-white to-orange-100/40" />
      
      {/* Static Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full opacity-25 transform-gpu pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(253,164,175,0.8) 0%, rgba(253,186,116,0) 70%)' }} />
        <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[45%] rounded-full opacity-20 transform-gpu pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(253,224,71,0) 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/60  border border-orange-200 text-orange-600 font-bold text-sm tracking-widest mb-6 shadow-sm"
          >
            OUR GALLERY
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Moments We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Cherish
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Explore our collection of memorable events and vibrant community gatherings
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer  ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 border-transparent"
                  : "bg-white/60 text-gray-600 hover:text-orange-600 border border-white/80 hover:border-orange-300 hover:shadow-md hover:bg-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] cursor-pointer transform hover:-translate-y-2 transition-all duration-500 border-[6px] border-white/80 "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                  <div className="bg-white/20  border border-white/30 rounded-2xl p-4 transform origin-bottom">
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-md tracking-wider uppercase">
                      {image.category}
                    </span>
                    <p className="font-extrabold text-white text-lg leading-tight drop-shadow-md">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
