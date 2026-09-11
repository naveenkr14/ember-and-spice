import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Menu", href: "/menu", external: true },
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-500 lg:px-8 ${
          isScrolled ? "bg-[#11110f]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="relative z-10 text-sm font-semibold tracking-[0.2em] text-[#f4efe5]"
        >
          EMBER & SPICE
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-[#a39d91] transition-colors duration-300 hover:text-[#f4efe5]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-[#a39d91] transition-colors duration-300 hover:text-[#f4efe5]"
              >
                {link.label}
              </a>
            ),
          )}

          <Link
            to="/reservation"
            className="group flex items-center gap-2 border border-[#c9a15a] px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-[#c9a15a] transition-all duration-300 hover:bg-[#c9a15a] hover:text-[#11110f]"
          >
            Reserve
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="relative z-10 text-[#f4efe5] md:hidden"
        >
          {isOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 min-h-screen bg-[#11110f] px-6 pt-24 md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) =>
                link.external ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      className="block border-b border-white/10 py-5 text-3xl font-medium text-[#f4efe5]"
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    className="border-b border-white/10 py-5 text-3xl font-medium text-[#f4efe5]"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ),
              )}

              <a
                href="#reservation"
                onClick={closeMenu}
                className="mt-8 flex items-center justify-center gap-2 bg-[#c9a15a] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#11110f]"
              >
                Reserve a Table
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
