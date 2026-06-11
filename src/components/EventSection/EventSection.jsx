import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

/* ─── Tag Badge ─────────────────────────────────── */
const tagConfig = {
  Featured:
    "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30",
  Upcoming:
    "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-lg shadow-blue-500/30",
  New: "bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-teal-500/30",
};

function TagBadge({ tag }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${tagConfig[tag] || "bg-gray-700 text-white"}`}
    >
      <Sparkles className="w-3 h-3" />
      {tag}
    </span>
  );
}

/* ─── Staggered Event Card ──────────────────────── */
function StaggerCard({ event, index, reverse = false }) {
  const colors = [
    {
      accent: "from-orange-500 to-red-500",
      num: "text-orange-500/10",
      ring: "border-orange-200/50",
    },
    {
      accent: "from-rose-500 to-pink-500",
      num: "text-rose-500/10",
      ring: "border-rose-200/50",
    },
    {
      accent: "from-violet-500 to-purple-500",
      num: "text-violet-500/10",
      ring: "border-violet-200/50",
    },
  ];
  const c = colors[index % colors.length];

  return (
    <AnimateOnScroll
      type={reverse ? "fade-left" : "fade-right"}
      delay={0.1 * index}
    >
      <div
        className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-6 group items-center`}
      >
        {/* ── Number badge ── */}
        <div className="hidden md:flex items-center justify-center w-32 shrink-0 relative">
          <span
            className={`text-[8rem] leading-none font-black select-none ${c.num} transition-all duration-700 group-hover:scale-110 group-hover:text-orange-500/20`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* ── Card ── */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ willChange: "transform" }}
          className={`flex-1 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-xl border border-orange-100 bg-white transition-all duration-300 relative group/card`}
        >
          {/* Image */}
          <div className="relative md:w-72 h-64 md:h-auto shrink-0 overflow-hidden rounded-[2rem] m-3">
            <img
              src={event.image}
              alt={event.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-[1.02]"
            />
            {/* Gradient strip */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80`}
            />
            {/* Tag over image */}
            <div className="absolute top-4 left-4">
              <TagBadge tag={event.tag} />
            </div>
            {/* Floating Date on Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 rounded-xl p-3 border border-white/20 text-white flex flex-col items-center justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Date
              </span>
              <span className="text-sm font-bold text-center leading-tight mt-0.5">
                {event.date}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-orange-500 group-hover/card:to-red-500 transition-all duration-300">
                {event.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                {event.description}
              </p>
            </div>

            <div className="space-y-6">
              {/* Meta */}
              <div className="flex flex-wrap gap-5">
                {[
                  { Icon: Clock, text: event.time },
                  { Icon: MapPin, text: event.location },
                ].map(({ Icon, text }, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500 font-semibold"
                  >
                    <Icon className="w-4 h-4 text-orange-500" />
                    {text}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${c.accent} text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 border-none cursor-pointer text-sm transition-all duration-300 transform hover:-translate-y-1`}
                >
                  View Details
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimateOnScroll>
  );
}

/* ─── Main Component ─────────────────────────────── */
export default function EventsPage() {
  const events = [
    {
      title: "Navratri Celebration 2025",
      date: "October 2-10, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Samaj Community Hall, Bengaluru",
      description:
        "Join us for 9 nights of traditional Garba and Dandiya with live music, traditional attire, and delicious food.",
      image:
        "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&auto=format&fit=crop&q=70",
      tag: "Featured",
    },
    {
      title: "Diwali Festival of Lights",
      date: "November 1, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center, Koramangala",
      description:
        "Celebrate with traditional puja, cultural performances, fireworks display, and a grand community dinner.",
      image:
        "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&auto=format&fit=crop&q=70",
      tag: "Upcoming",
    },
    {
      title: "Family Picnic & Sports Day",
      date: "December 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Lalbagh Botanical Garden",
      description:
        "A fun-filled day with outdoor games, sports competitions, picnic lunch, and activities for all ages.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
      tag: "New",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ══ DARK HEADER BAND ════════════════════════ */}
      <div className="bg-gray-950 relative overflow-hidden">
        {/* Static Background Mesh - optimized with radial gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -left-40 w-[250px] h-[250px] rounded-full opacity-15 transform-gpu"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,1) 0%, rgba(244,63,94,0) 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[250px] h-[250px] rounded-full opacity-15 transform-gpu"
            style={{
              background:
                "radial-gradient(circle, rgba(234,179,8,1) 0%, rgba(234,88,12,0) 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <AnimateOnScroll type="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 border border-orange-500/30 bg-orange-500/10 text-orange-400 px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Upcoming Events
                </div>

                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] drop-shadow-lg tracking-tighter">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                      Events
                    </span>
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
                </div>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium pt-4">
                  Our calendar is filled with celebrations, cultural programs,
                  social gatherings, and charity drives. From Navratri and
                  Diwali to educational workshops and family picnics, there's
                  something for everyone.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Floating accent pill */}
            <AnimateOnScroll type="fade-left" delay={0.2}>
              <div className="shrink-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-[2.5rem] p-8 shadow-2xl shadow-orange-500/40 text-white text-center min-w-[200px] border border-white/20">
                <div className="text-6xl font-black leading-none drop-shadow-md">
                  3
                </div>
                <div className="text-orange-100 text-xs font-bold uppercase tracking-widest mt-2 leading-relaxed">
                  Events This
                  <br />
                  Season
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* ══ STAGGERED CARDS SECTION ═════════════════ */}
      <div className="bg-gradient-to-br from-orange-50/60 via-white to-orange-100/40 relative">
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 space-y-16">
          {events.map((event, i) => (
            <StaggerCard
              key={i}
              event={event}
              index={i}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* ══ NEWSLETTER CTA ══════════════════════════ */}
      <div className="bg-gradient-to-br from-orange-100/40 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
          <AnimateOnScroll type="fade-up" delay={0.2}>
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-500 via-rose-500 to-red-600 shadow-[0_20px_60px_rgba(249,115,22,0.3)] group/newsletter">
              {/* Static Blobs - optimized */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full opacity-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-8 py-16 md:p-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="text-white space-y-6">
                  <div className="inline-flex items-center gap-3 bg-white/10  px-5 py-2.5 rounded-full text-sm font-bold border border-white/20 shadow-lg">
                    <Bell className="w-4 h-4 text-orange-200" />
                    Stay Updated
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black leading-[1.1]">
                    Never Miss
                    <br />
                    an Event!
                  </h2>
                  <p className="text-orange-50 text-lg md:text-xl leading-relaxed font-medium max-w-lg drop-shadow-md">
                    Subscribe to our newsletter and get instant notifications
                    about upcoming celebrations, cultural programs, and
                    community gatherings directly in your inbox.
                  </p>
                </div>

                {/* Right form */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-white/80 transition-shadow duration-300">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                    Get Event Updates
                  </h3>
                  <div className="space-y-5">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-6 py-5 rounded-2xl border-2 border-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 bg-white/90 text-base shadow-inner font-medium text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-5 rounded-2xl font-bold transition-all shadow-[0_10px_25px_rgba(249,115,22,0.4)] hover:shadow-2xl flex items-center justify-center gap-3 border-none cursor-pointer text-lg transform hover:-translate-y-1">
                      Subscribe Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-gray-500 text-sm text-center font-semibold pt-2">
                      Join <span className="text-orange-600">1000+</span>{" "}
                      community members already subscribed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
