import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/hero.mp4";

const emberParticles = [
  { left: "18%", top: "68%", drift: 35, duration: 7, delay: 0 },
  { left: "42%", top: "78%", drift: -28, duration: 9, delay: 1.8 },
  { left: "72%", top: "62%", drift: 24, duration: 8, delay: 3.2 },
  { left: "88%", top: "76%", drift: -22, duration: 10, delay: 0.8 },
];

function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 650], [0, -36]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11110f]">
      {/* Background Image */}
      <motion.video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Ember & Spice dining room atmosphere"
        initial={{ scale: 1.06 }}
        animate={{ scale: [1.06, 1.13, 1.06] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#c9a15a]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        {emberParticles.map((particle, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 30 }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.35, 0.5],
              x: [0, particle.drift, particle.drift / 2],
              y: [30, -70, -180],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: particle.left, top: particle.top }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#f7d58f] shadow-[0_0_20px_6px_rgba(201,161,90,0.45)]"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-8 lg:pb-20">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="ember-rule h-px w-10 bg-[#c9a15a]" />

            <p className="text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
              Contemporary Indian Dining
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-tight text-[#f4efe5] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            The Art
            <br />
            of Indian
            <br />
            <span className="text-[#c9a15a]">Cuisine.</span>
          </motion.h1>

          {/* Description + Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-[#d0cbc1]">
              Ancient recipes, contemporary expression. Discover an
              unforgettable journey through India's rich culinary heritage.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="group flex items-center gap-3 bg-[#f4efe5] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#11110f] transition-all duration-300 hover:bg-[#c9a15a]"
              >
                Explore Menu
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/reservation"
                className="flex items-center gap-3 border border-[#f4efe5]/40 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#f4efe5] backdrop-blur-sm transition-all duration-300 hover:border-[#c9a15a] hover:text-[#c9a15a]"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-end justify-between border-t border-white/20 pt-5"
        >
          <div className="hidden gap-10 sm:flex">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Location
              </p>

              <p className="mt-2 text-xs text-white/80">New Delhi, India</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Open
              </p>

              <p className="mt-2 text-xs text-white/80">
                Tue — Sun · 6 PM — 11 PM
              </p>
            </div>
          </div>

          <motion.a
            href="#menu"
            className="group ml-auto flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
            animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
