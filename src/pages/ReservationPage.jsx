import { ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const timeOptions = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

function ReservationPage() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("7:30 PM");
  const [preference, setPreference] = useState("Vegetarian");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Reservation requested for ${guests} guest${
        guests > 1 ? "s" : ""
      } on ${date} at ${time}. Preference: ${preference}.`,
    );
  };

  return (
    <main className="min-h-screen bg-[#11110f] text-[#f4efe5]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link
            to="/"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#a39d91] transition-colors hover:text-[#f4efe5]"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold tracking-[0.2em] text-[#f4efe5]"
          >
            EMBER & SPICE
          </Link>

          <Link
            to="/menu"
            className="text-[10px] uppercase tracking-[0.2em] text-[#a39d91] transition-colors hover:text-[#f4efe5]"
          >
            View Menu
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a15a]" />

              <p className="text-xs uppercase tracking-[0.3em] text-[#c9a15a]">
                Reservations
              </p>
            </div>

            <h1
              className="mt-8 text-6xl font-medium leading-[0.88] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Reserve
              <br />
              <span className="text-[#c9a15a]">your table.</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#a39d91]">
              Choose your preferred date, time and number of guests. We'll
              prepare the table while you prepare for an evening worth
              remembering.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a15a]">
                Opening Hours
              </p>

              <p className="mt-3 text-sm text-[#a39d91]">
                Tuesday — Sunday
                <br />6 PM — 11 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-[#1a1916] p-6 sm:p-8 lg:p-10"
            >
              <div>
                <label
                  htmlFor="reservation-date"
                  className="text-[10px] uppercase tracking-[0.25em] text-[#a39d91]"
                >
                  Select Date
                </label>

                <div className="relative mt-3">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#c9a15a]"
                  />

                  <input
                    id="reservation-date"
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-white/10 bg-[#11110f] px-12 py-4 text-sm text-[#f4efe5] outline-none transition-colors focus:border-[#c9a15a]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="guests"
                  className="text-[10px] uppercase tracking-[0.25em] text-[#a39d91]"
                >
                  Number of Guests
                </label>

                <select
                  id="guests"
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  className="mt-3 w-full appearance-none border border-white/10 bg-[#11110f] px-4 py-4 text-sm text-[#f4efe5] outline-none transition-colors focus:border-[#c9a15a]"
                >
                  {guestOptions.map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#a39d91]">
                  Preferred Time
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTime(option)}
                      className={`border px-3 py-3 text-xs transition-all ${
                        time === option
                          ? "border-[#c9a15a] bg-[#c9a15a] text-[#11110f]"
                          : "border-white/10 text-[#a39d91] hover:border-white/30 hover:text-[#f4efe5]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#a39d91]">
                  Dining Preference
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {["Vegetarian", "Non-Vegetarian"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setPreference(option)}
                      className={`border px-4 py-4 text-xs uppercase tracking-[0.1em] transition-all ${
                        preference === option
                          ? "border-[#c9a15a] bg-[#c9a15a] text-[#11110f]"
                          : "border-white/10 text-[#a39d91] hover:border-white/30 hover:text-[#f4efe5]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="group mt-10 flex w-full items-center justify-center gap-3 bg-[#c9a15a] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#11110f] transition-all duration-300 hover:bg-[#f4efe5]"
              >
                Check Availability
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="mt-5 text-center text-[10px] leading-5 text-[#68645c]">
                Reservation requests are subject to availability.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ReservationPage;
