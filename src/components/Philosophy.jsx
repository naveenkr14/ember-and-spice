import { motion } from "motion/react";

function Philosophy() {
  return (
    <section className="bg-[#11110f] px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4 sm:mb-16"
        >
          <span className="ember-rule h-px w-10 bg-[#c9a15a]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
            Our Philosophy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h2
            className="text-5xl font-medium leading-[0.95] tracking-tight text-[#f4efe5] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            India is not
            <span className="text-[#c9a15a]"> one cuisine.</span>
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16 lg:mt-12">
            <p className="text-2xl leading-tight text-[#d8d1c5] sm:text-3xl lg:text-4xl">
              It is a thousand stories, passed from one generation to the next.
            </p>

            <p className="max-w-md self-end text-sm leading-7 text-[#a39d91]">
              At Ember & Spice, we honour those stories while giving them a
              contemporary voice. Every dish begins with tradition and ends with
              a little curiosity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 lg:mt-20"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Our Approach
            </p>

            <p
              className="mt-2 text-2xl text-[#f4efe5]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Tradition, Reimagined.
            </p>
          </div>

          <span className="text-xs tracking-[0.2em] text-[#c9a15a]">01</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Philosophy;
