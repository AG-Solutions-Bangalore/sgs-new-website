import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Heart,
  Phone,
  Sparkles,
  Star,
  Users,
  Zap,
  Shield,
  Music,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

/* ── Animated Counter ─────────────────────────────── */
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    let lastText = "";
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix;
        // Only trigger DOM update if the text actually changes
        if (formatted !== lastText) {
          ref.current.textContent = formatted;
          lastText = formatted;
        }
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums inline-block" />;
}

/* ── Bento Card Wrapper ───────────────────────────── */
function BentoCard({
  children,
  className = "",
  delay = 0,
  animationType = "fade-up",
}) {
  return (
    <AnimateOnScroll type={animationType} delay={delay}>
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-3xl border border-white/60 shadow-lg ${className}`}
      >
        {/* <div
        className={`transition-all duration-75 ease-out hover:-translate-y-1 hover:shadow-xl relative overflow-hidden rounded-3xl border border-white/60 shadow-lg ${className}`}
      > */}
        {children}
      </motion.div>
    </AnimateOnScroll>
  );
}

/* ── Main Component ───────────────────────────────── */
export default function MissionPage() {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Members",
      sub: "Happy families",
      gradient: "from-orange-500 to-red-500",
      bg: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: Star,
      value: 150,
      suffix: "+",
      label: "Festivals",
      sub: "Cultural events",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Years",
      sub: "Of legacy",
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  const pillars = [
    {
      icon: Heart,
      title: "Community First",
      desc: "Building bonds that last generations through shared celebrations and support.",
      gradient: "from-rose-500 to-orange-500",
      bg: "bg-rose-50",
    },
    {
      icon: BookOpen,
      title: "Education & Growth",
      desc: "Empowering members through workshops, scholarships, and cultural learning.",
      gradient: "from-amber-500 to-yellow-400",
      bg: "bg-amber-50",
    },
    {
      icon: Music,
      title: "Arts & Culture",
      desc: "Keeping traditions alive through music, dance, festivals, and storytelling.",
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      desc: "Operating with transparency and accountability to every community member.",
      gradient: "from-teal-500 to-emerald-500",
      bg: "bg-teal-50",
    },
  ];

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/60 via-white to-white pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(253,186,116,0.8) 0%, rgba(254,215,170,0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,168,212,0.8) 0%, rgba(243,232,255,0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Section Header ───────────────────────────── */}
        <AnimateOnScroll type="fade-up">
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white border border-orange-100 shadow-sm text-orange-600 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide"
            >
              <Sparkles className="w-4 h-4" />
              OUR MISSION &amp; VALUES
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Preserving{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl opacity-50" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#fb6332] to-amber-500">
                  Our Heritage
                </span>
              </span>
            </h2>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Celebrating Gujarati culture, fostering unity, and creating a
              vibrant community for families across Bengaluru.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Bento Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-auto">
          {/* Card 1 — Mission Statement (wide, tall) */}
          <div className="md:col-span-4 lg:col-span-5">
            <BentoCard
              className="h-full bg-gradient-to-br from-[#fb6332] to-orange-400 text-white p-8 min-h-[320px]"
              delay={0}
              animationType="fade-right"
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/3"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/3"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 bg-white/20  rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mb-2">
                    Our Mission
                  </p>
                  <h3 className="text-3xl font-black leading-snug mb-4">
                    Uniting Gujaratis,
                    <br />
                    Building Futures
                  </h3>
                  <p className="text-orange-50 text-sm leading-relaxed opacity-90">
                    To preserve, promote, and celebrate the cultural heritage of
                    the Gujarati community while offering a welcoming space for
                    social, educational, and cultural activities in Bengaluru.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Card 2 — Stats stacked */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-4">
            {stats.map((stat, i) => (
              <BentoCard
                key={i}
                className={`${stat.bg} p-6 flex items-center gap-5`}
                delay={0.1 * (i + 1)}
                animationType="fade-left"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md shrink-0`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={`text-2xl font-black ${stat.textColor}`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">{stat.sub}</div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Card 3 — Contact CTA */}
          <div className="md:col-span-6 lg:col-span-4">
            <BentoCard
              className="h-full bg-white p-8 min-h-[280px]"
              delay={0.2}
              animationType="zoom-in"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-80"
                style={{
                  background:
                    "radial-gradient(circle, rgba(254,215,170,0.8) 0%, rgba(255,251,235,0) 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fb6332] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Get In Touch
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Questions about membership or events? We're here to help.
                  </p>
                </div>
                <a
                  href="tel:+916287678767"
                  className="mt-6 flex items-center justify-between w-full bg-gradient-to-r from-[#fb6332] to-amber-500 text-white p-5 rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/20 group/btn"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-orange-100">
                      Call Us Now
                    </span>
                    <span className="text-lg font-black">+91 62876 78767</span>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-white/30 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </BentoCard>
          </div>

          {/* Card 4 — Four Pillars (full width row) */}
          {pillars.map((pillar, i) => (
            <div key={i} className="md:col-span-3 lg:col-span-3">
              <BentoCard
                className="bg-white p-7 h-full min-h-[180px]"
                delay={0.1 * i}
                animationType="fade-up"
              >
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-md mb-5`}
                >
                  <pillar.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-black text-gray-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </BentoCard>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ─────────────────────────── */}
        <AnimateOnScroll type="fade-up" delay={0.3}>
          <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                Be Part of Something Bigger
              </p>
              <h3 className="text-2xl font-black text-gray-900">
                Join Our Thriving Community
              </h3>
              <p className="text-sm text-gray-500">
                Become a member today and experience the warmth of Gujarati
                culture in Bengaluru.
              </p>
            </div>
            <motion.a
              href="/membership"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#fb6332] to-amber-500 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
            >
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
