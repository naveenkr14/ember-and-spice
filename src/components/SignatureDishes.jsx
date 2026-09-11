import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import menuItems from "../data/menu";

function SignatureDishes() {
  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-[#f4efe5] px-6 py-24 text-[#11110f] sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-end"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a15a]" />

            <p className="text-xs uppercase tracking-[0.3em] text-[#8b6b32]">
              The Menu
            </p>
          </div>

          <div>
            <h2
              className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Signature
              <br />
              <span className="text-[#9d7938]">Dishes.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#68645c]">
              A contemporary expression of India's diverse culinary heritage,
              created with seasonal ingredients and an obsessive attention to
              detail.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className={
                index === 2 ? "md:col-span-2 md:mx-auto md:max-w-2xl" : ""
              }
            >
              <div className="group relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white drop-shadow-md">
                  {item.number}
                </span>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4efe5] opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-6">
                  <h3
                    className="text-3xl font-medium"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {item.name}
                  </h3>

                  <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[#8b6b32]">
                    {item.category}
                  </span>
                </div>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#68645c]">
                  {item.description}
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
          className="mt-16 flex justify-center border-t border-[#11110f]/10 pt-8"
        >
          <Link
            to="/menu"
            className="group flex items-center gap-3 border border-[#11110f] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#11110f] hover:text-[#f4efe5]"
          >
            Discover the Full Menu
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default SignatureDishes;
