import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
/* ─── Role accent colours ───────────────────────── */
const roleColors = {
  President: {
    pill: "bg-orange-100 text-orange-600",
    bar: "from-orange-500 to-amber-400",
  },
  "Vice President": {
    pill: "bg-blue-100 text-blue-600",
    bar: "from-blue-500 to-cyan-400",
  },
  Secretary: {
    pill: "bg-violet-100 text-violet-600",
    bar: "from-violet-500 to-purple-400",
  },
  Treasurer: {
    pill: "bg-emerald-100 text-emerald-600",
    bar: "from-emerald-500 to-teal-400",
  },
};
/* ─── Team Card ─────────────────────────────────── */
function TeamCard({ name, designation, image, index }) {
  const color = roleColors[designation] || {
    pill: "bg-gray-100 text-gray-600",
    bar: "from-gray-400 to-gray-300",
  };
  return (
    <AnimateOnScroll type="fade-up" delay={0.1 * index}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-orange-100 transition-all duration-400 cursor-pointer"
      >
        {/* Top accent gradient bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${color.bar}`} />
        {/* Photo area */}
        <div className="relative overflow-hidden h-64 bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* Social icons — slide up on hover */}
          <motion.div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 pb-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
            {[
              { Icon: FaLinkedin, href: "#" },
              { Icon: FaTwitter, href: "#" },
              { Icon: Mail, href: "#" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/15 hover:bg-orange-500  text-white rounded-xl flex items-center justify-center border border-white/20 hover:border-orange-500 transition-all shadow-lg"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
          {/* Index number watermark */}
          <div className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none leading-none">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        {/* Info */}
        <div className="p-6 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
              {name}
            </h3>
            <span
              className={`inline-block mt-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${color.pill}`}
            >
              {designation}
            </span>
          </div>
          {/* Arrow indicator */}
          <motion.div
            whileHover={{ x: 3 }}
            className="w-9 h-9 rounded-xl bg-gray-50 group-hover:bg-orange-50 border border-gray-100 group-hover:border-orange-200 flex items-center justify-center transition-all shrink-0"
          >
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}
/* ─── Main Export ────────────────────────────────── */
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Rajesh Patel",
      designation: "President",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
    },
    {
      name: "Priya Shah",
      designation: "Vice President",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
    },
    {
      name: "Amit Kumar",
      designation: "Secretary",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg",
    },
    {
      name: "Meera Desai",
      designation: "Treasurer",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-4.jpg",
    },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-40 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, rgba(255,237,213,0.8) 0%, rgba(255,237,213,0) 70%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-30 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, rgba(254,243,199,0.8) 0%, rgba(254,243,199,0) 70%)' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Header ─────────────────────────────────── */}
        <AnimateOnScroll type="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white border border-orange-100 shadow-sm text-orange-600 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide"
              >
                <Users className="w-4 h-4" />
                OUR TEAM
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Meet the{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-amber-100  rounded-xl opacity-70" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#fb6332] to-amber-500">
                    Leaders
                  </span>
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                Meet the dedicated leaders driving our community forward with
                passion and commitment.
              </p>
            </div>
            {/* Member count pill */}
            <AnimateOnScroll type="fade-left" delay={0.2}>
              <div className="shrink-0 flex items-center gap-4 bg-white border border-gray-100 shadow-md rounded-2xl px-6 py-4">
                <div className="flex -space-x-3">
                  {teamMembers.slice(0, 3).map((m, i) => (
                    <img
                      key={i}
                      src={m.image}
                      alt={m.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover object-top shadow-sm"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white text-xs font-black shadow-sm">
                    +1
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900">
                    4 Members
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">
                    Core Committee
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
        {/* ── Cards Grid ─────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} index={index} />
          ))}
        </div>
        {/* ── Bottom strip ───────────────────────────── */}
        <AnimateOnScroll type="fade-up" delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl border border-gray-100 shadow-lg px-8 py-6">
            <div>
              <p className="text-sm font-bold text-gray-900">
                Interested in joining the committee?
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                We're always looking for passionate community members.
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#fb6332] to-amber-500 text-white font-bold px-7 py-3 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all text-sm"
            >
              Get Involved
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
