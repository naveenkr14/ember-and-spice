import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import storyImage from "../assets/images/Hero.jpg";

function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-24 overflow-hidden bg-[#11110f] px-6 py-24 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a15a]" />

              <p className="text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
                Our Story
              </p>
            </div>

            <h2
              className="mt-8 text-5xl font-medium leading-[0.9] tracking-tight text-[#f4efe5] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              From tradition
              <br />
              <span className="text-[#c9a15a]">to the table.</span>
            </h2>

            <div className="mt-8 max-w-lg space-y-5 text-sm leading-7 text-[#a39d91]">
              <p>
                Ember & Spice was born from a simple idea: Indian cuisine
                deserves to be experienced not only through its flavours, but
                through its stories.
              </p>

              <p>
                We bring together recipes passed through generations with
                contemporary techniques, seasonal ingredients and a deep respect
                for the craft of cooking.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#c9a15a] pb-2 text-xs uppercase tracking-[0.2em] text-[#c9a15a] transition-colors duration-300 hover:text-[#f4efe5]"
            >
              Discover our story
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="group relative overflow-hidden">
              <motion.img
                src={storyImage}
                alt="Signature Indian cuisine at Ember & Spice"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />
            </div>

            <div className="absolute bottom-5 left-5 bg-[#c9a15a] px-6 py-4 text-[#11110f] sm:bottom-7 sm:left-7">
              <p className="text-[10px] uppercase tracking-[0.2em]">
                Established
              </p>

              <p
                className="mt-1 text-2xl leading-none"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                2026
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-end border-t border-white/10 pt-5 lg:mt-20"
        >
          <span className="text-xs tracking-[0.2em] text-white/40">
            02 / 05
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;
