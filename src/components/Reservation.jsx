import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();

  const handleBookTable = () => {
    navigate("/reservation");
  };

  return (
    <section
      id="reservation"
      className="scroll-mt-24 bg-[#c9a15a] px-6 py-24 text-[#11110f] sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#11110f]" />

            <p className="text-xs uppercase tracking-[0.3em]">Reservations</p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <h2
              className="max-w-5xl text-6xl font-medium leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Your table
              <br />
              <span className="text-[#f4efe5]">awaits.</span>
            </h2>

            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-[#30291e]">
                Join us for an evening of thoughtful food, warm hospitality and
                stories worth sharing.
              </p>

              <button
                type="button"
                onClick={handleBookTable}
                className="group mt-6 inline-flex items-center gap-3 border border-[#11110f] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#11110f] hover:text-[#f4efe5]"
              >
                Book a Table
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid gap-8 border-t border-[#11110f]/20 pt-8 sm:grid-cols-3 lg:mt-24"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#554a38]">
              Visit
            </p>

            <p className="mt-3 text-sm">
              24, Lodhi Road
              <br />
              New Delhi, India
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#554a38]">
              Opening Hours
            </p>

            <p className="mt-3 text-sm">
              Tuesday — Sunday
              <br />6 PM — 11 PM
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#554a38]">
              Reservations
            </p>

            <a
              href="mailto:reservations@emberandspice.com"
              className="mt-3 inline-block text-sm underline decoration-[#11110f]/30 underline-offset-4 transition-opacity hover:opacity-60"
            >
              reservations@emberandspice.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Reservation;
