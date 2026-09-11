import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="bg-[#11110f] px-6 py-16 text-[#f4efe5] lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a href="#" className="text-lg font-semibold tracking-[0.2em]">
              EMBER & SPICE
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#a39d91]">
              Contemporary Indian dining rooted in tradition, shaped by
              curiosity and brought to life through fire.
            </p>
          </motion.div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a15a]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#menu"
                className="w-fit text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Menu
              </a>

              <a
                href="#story"
                className="w-fit text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Our Story
              </a>

              <a
                href="#gallery"
                className="w-fit text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a15a]">
              Follow
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="group flex w-fit items-center gap-2 text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Instagram
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#"
                className="group flex w-fit items-center gap-2 text-sm text-[#a39d91] transition-colors hover:text-[#f4efe5]"
              >
                Facebook
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2026 Ember & Spice
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            New Delhi · India
          </p>

          <a
            href="#"
            className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-[#c9a15a]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
