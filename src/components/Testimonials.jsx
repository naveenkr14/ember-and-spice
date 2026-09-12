import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Every dish felt familiar and completely new at the same time. The flavours stay with you long after dinner.",
    name: "Ananya Mehra",
    detail: "Delhi · Food Writer",
  },
  {
    quote:
      "Ember & Spice doesn't try to reinvent Indian food. It understands it first, and that makes all the difference.",
    name: "Rohan Kapoor",
    detail: "Mumbai · Guest",
  },
  {
    quote:
      "From the first course to the last, everything felt intentional. One of the most memorable dinners I've had.",
    name: "Maya Sharma",
    detail: "Bengaluru · Guest",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#11110f] px-6 py-24 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="ember-rule h-px w-10 bg-[#c9a15a]" />

              <p className="text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
                Guest Experiences
              </p>
            </div>

            <h2
              className="mt-8 max-w-3xl text-5xl font-medium leading-[0.92] tracking-tight text-[#f4efe5] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Stories from
              <br />
              <span className="text-[#c9a15a]">the table.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#a39d91] md:mb-2">
            Some experiences are best described by the people who have shared
            them with us.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-0 border-t border-white/10 md:mt-20 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
            >
              <span className="text-[10px] tracking-[0.25em] text-[#c9a15a]">
                0{index + 1}
              </span>

              <blockquote
                className="mt-8 text-2xl leading-[1.15] text-[#f4efe5] sm:text-3xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#f4efe5]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#a39d91]">
                  {testimonial.detail}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-between border-t border-white/10 pt-5"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            A table worth remembering
          </p>

          <span className="text-xs tracking-[0.2em] text-[#c9a15a]">
            04 / 05
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
