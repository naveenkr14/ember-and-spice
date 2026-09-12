import { motion } from "motion/react";

import heroImage from "../assets/images/Hero.jpg";
import biryaniImage from "../assets/images/biryani.jpg";
import paneerImage from "../assets/images/paneer.avif";
import galoutiImage from "../assets/images/galouti.webp";

const galleryImages = [
  {
    src: heroImage,
    alt: "Ember & Spice signature Indian cuisine",
  },
  {
    src: biryaniImage,
    alt: "Awadhi dum biryani",
  },
  {
    src: paneerImage,
    alt: "Charred paneer",
  },
  {
    src: galoutiImage,
    alt: "Tandoori galouti",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#f4efe5] px-6 py-24 text-[#11110f] sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="ember-rule h-px w-10 bg-[#c9a15a]" />

              <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b32]">
                The Experience
              </p>
            </div>

            <h2
              className="mt-8 text-5xl font-medium leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              A feast for
              <br />
              <span className="text-[#9d7938]">the senses.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#68645c] md:mb-2">
            From the warmth of the kitchen to the final plate, every detail is
            part of the Ember & Spice experience.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden md:row-span-2"
          >
            <motion.img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full min-h-[450px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            <span aria-hidden="true" className="image-sheen" />

            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                Ember & Spice
              </p>

              <p
                className="mt-1 text-2xl text-white"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Where tradition meets fire.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative overflow-hidden"
          >
            <motion.img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-white drop-shadow-md">
              01
            </span>

            <span aria-hidden="true" className="image-sheen" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden"
          >
            <motion.img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-white drop-shadow-md">
              02
            </span>

            <span aria-hidden="true" className="image-sheen" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="group relative overflow-hidden md:col-span-2"
          >
            <motion.img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-[16/7] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                From the kitchen
              </p>

              <p
                className="mt-1 text-2xl text-white sm:text-3xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Crafted with intention.
              </p>
            </div>

            <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-white drop-shadow-md">
              03
            </span>

            <span aria-hidden="true" className="image-sheen" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-between border-t border-[#11110f]/10 pt-5"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#68645c]">
            Ember & Spice · New Delhi
          </p>

          <span className="text-xs tracking-[0.2em] text-[#8b6b32]">
            03 / 05
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
