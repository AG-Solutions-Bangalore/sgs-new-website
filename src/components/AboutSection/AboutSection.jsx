import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Globe,
  Heart,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "United Community",
      description: "Bringing Gujaratis together",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-50",
      textCol: "text-orange-500",
    },
    {
      icon: Sparkles,
      title: "Cultural Heritage",
      description: "Preserving our traditions",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      textCol: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Social Initiatives",
      description: "Supporting each other",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      textCol: "text-pink-500",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Festivals & gatherings",
      color: "from-purple-500 to-indigo-500",
      bg: "bg-purple-50",
      textCol: "text-purple-500",
    },
  ];

  const features = [
    { icon: Globe, text: "Connecting Gujaratis worldwide" },
    { icon: Shield, text: "Strong community values" },
    { icon: Star, text: "Cultural programs & festivals" },
    { icon: BookOpen, text: "Educational initiatives" },
  ];

  // Variants for staggered animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9, rotate: 2 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/30" />

      {/* Static Mesh Gradients (Optimized) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-20 transform-gpu"
          style={{
            background:
              "radial-gradient(circle, rgba(253,164,175,0.8) 0%, rgba(253,186,116,0) 70%)",
          }}
        />
        <div
          className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-15 transform-gpu"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(254,240,138,0) 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-28"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60  border border-orange-200 text-orange-600 text-sm font-bold mb-8 shadow-sm"
          >
            <Award className="w-4 h-4 fill-orange-500" />
            ABOUT OUR COMMUNITY
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8"
          >
            Samyuktgujarati{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Samaj
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A united community celebrating our culture, values, and
            togetherness. We bring Gujaratis living away from home closer
            through social, cultural, and charitable activities.
          </motion.p>
        </motion.div>

        {/* MAIN SPLIT */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          {/* LEFT STORY */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-12"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Samyuktgujarati Samaj is a vibrant community organization formed
                with the vision of uniting Gujaratis under one platform.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
                With regular gatherings, festivals, and programs, we keep the
                spirit of Gujarat alive everywhere.
              </p>
            </motion.div>

            {/* FEATURE LIST */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="flex items-center gap-5 bg-white/60  p-5 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-100/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-500 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-gray-800 font-bold text-base leading-tight">
                      {feature.text}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5 pt-6"
            >
              <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold overflow-hidden shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                <span className="relative z-10">Explore More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>

              <button className="px-8 py-4 rounded-2xl bg-white/80  border-2 border-orange-100 text-gray-800 font-bold hover:border-orange-500 hover:text-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center justify-center">
                Join Community
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL BLOCK */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* MAIN IMAGE */}
            <motion.div
              variants={scaleUp}
              className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white/60  relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="https://samyuktgujaratisamaj.com/draft1/img/feature.jpg"
                alt="Community"
                className="w-full h-[650px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* FLOATING CARD 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: [30, 0, -20, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                x: { duration: 0.6, delay: 0.3 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
              className="absolute top-16 -left-10 md:-left-16 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6 w-[240px] border border-orange-100 z-20"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2">
                5000+
              </div>
              <div className="text-sm text-gray-600 font-bold tracking-wide uppercase">
                Members worldwide
              </div>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: [30, 0, -15, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                x: { duration: 0.6, delay: 0.4 },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
              className="absolute bottom-16 -right-10 md:-right-16 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6 w-[260px] border border-orange-100 z-20"
            >
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-white shadow-md z-30" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-4 border-white shadow-md z-20" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-4 border-white shadow-md z-10" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900 text-base mb-1">
                    Active Now
                  </div>
                  <div className="text-xs text-orange-600 font-bold">
                    Join discussions
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        >
          {highlights.map((h, i) => {
            const Icon = h.icon;

            return (
              <motion.div
                variants={fadeUp}
                key={i}
                className="group relative h-full flex"
              >
                {/* Hover Glow Background */}
                <div
                  className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 transform-gpu group-hover:scale-105`}
                />

                {/* Card Content Layer */}
                <div className="relative flex flex-col h-full w-full bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-shadow duration-300 group-hover:-translate-y-3 overflow-hidden">
                  {/* Subtle Background Watermark Icon */}
                  <Icon
                    className={`absolute -right-8 -bottom-8 w-48 h-48 ${h.textCol} opacity-[0.02] group-hover:opacity-[0.05] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-extrabold text-2xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {h.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow font-medium">
                      {h.description}
                    </p>

                    {/* Animated Learn More Link */}
                    <div
                      className={`flex items-center text-sm font-bold ${h.textCol} opacity-80 group-hover:opacity-100 transition-all duration-300`}
                    >
                      Learn more
                      <div className="relative overflow-hidden w-5 h-5 ml-2 flex items-center justify-center">
                        <ArrowRight className="absolute w-4 h-4 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0" />
                        <ArrowRight className="absolute w-4 h-4 -translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
