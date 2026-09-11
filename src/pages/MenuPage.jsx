import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import fullMenu from "../data/fullMenu";

const filters = ["All", "Vegetarian", "Non-Vegetarian", "Desserts"];

function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleSections =
    activeFilter === "All"
      ? fullMenu
      : activeFilter === "Vegetarian"
        ? fullMenu.filter((section) =>
            [
              "Vegetarian Starters",
              "Vegetarian Main Course",
              "Rice & Pulao",
              "Dal",
              "Breads From The Tandoor",
            ].includes(section.category),
          )
        : activeFilter === "Non-Vegetarian"
          ? fullMenu.filter((section) =>
              [
                "Non-Vegetarian Starters",
                "Non-Vegetarian Main Course",
                "Biryani",
              ].includes(section.category),
            )
          : fullMenu.filter((section) => section.category === "Desserts");

  return (
    <main className="min-h-screen bg-[#241713] text-[#f4efe5]">
      {/* Header */}
      <header className="border-b border-[#c9a15a]/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link
            to="/"
            className="group flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#a39d91] transition hover:text-[#f4efe5]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          <Link
            to="/"
            className="font-serif text-2xl tracking-[0.08em] text-[#f4efe5]"
          >
            EMBER <span className="text-[#c9a15a]">&</span> SPICE
          </Link>

          <Link
            to="/reservation"
            className="group flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#c9a15a] transition hover:text-[#f4efe5]"
          >
            Reserve
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c9a15a]">
            EMBER & SPICE
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] text-[#f4efe5] sm:text-7xl lg:text-8xl">
            The Menu.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#a39d91] sm:text-lg">
            A contemporary expression of India's culinary heritage, shaped by
            fire, spice, patience and seasonality.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 border-y border-[#c9a15a]/15 bg-[#241713]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 sm:px-7 ${
                  activeFilter === filter
                    ? "border-[#c9a15a] bg-[#c9a15a] text-[#241713]"
                    : "border-[#c9a15a]/20 text-[#a39d91] hover:border-[#c9a15a]/50 hover:text-[#f4efe5]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="space-y-24">
          {visibleSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.6,
                delay: sectionIndex * 0.03,
              }}
            >
              {/* Section Heading */}
              <div className="border-t border-[#c9a15a]/20 pt-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </p>

                  <h2 className="font-serif text-3xl uppercase text-[#f4efe5] sm:text-4xl">
                    {section.category}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-[#a39d91]">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-8 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <article key={item.name} className="group">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl uppercase leading-tight text-[#f4efe5] transition group-hover:text-[#c9a15a]">
                        {item.name}
                      </h3>

                      <span className="shrink-0 font-serif text-lg text-[#c9a15a]">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Tags */}
                    {item.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#c9a15a]/15 px-3 py-1 text-xs text-[#a39d91]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-[#c9a15a]/20 bg-[#c9a15a] px-6 py-20 text-[#241713] lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]">EMBER & SPICE</p>

            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
              Your table awaits.
            </h2>
          </div>

          <Link
            to="/reservation"
            className="group inline-flex w-fit items-center gap-3 border border-[#241713] px-6 py-4 text-sm uppercase tracking-[0.18em] transition hover:bg-[#241713] hover:text-[#f4efe5]"
          >
            Reserve a Table
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;
