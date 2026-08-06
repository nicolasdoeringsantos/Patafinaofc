import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFileAlt,
  FaPaw,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Empresa",
    href: "/#sobre",
  },
  {
    title: "Catálogo",
    href: "/#catalogo",
  },
  {
    title: "Contato",
    href: "/#contato",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">

        <motion.div

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: scrolled ? 0.98 : 1,
          }}

          transition={{
            duration: .35,
          }}

          className={`
          mx-auto
          flex
          h-17
          max-w-7xl
          items-center
          justify-between

          rounded-[22px]

          border

          px-8

          transition-all

          duration-300

          ${
            scrolled
              ? "border-slate-200 bg-white shadow-xl shadow-slate-900/10"
              : "border-white/20 bg-white/10 backdrop-blur-3xl"
          }
          `}
        >

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-blue-700
              to-cyan-500
              shadow-lg
              "
            >

              <motion.div

                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}

              >

                <FaPaw className="text-white text-xl" />

              </motion.div>

            </div>

            <div>

              <h2
                className={`
                text-2xl
                font-black
                tracking-tight

                ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }
                `}
              >

                PATA

                <span className="font-light text-blue-500">

                  {" "}FINA

                </span>

              </h2>

              <p
                className={`
                text-[11px]
                uppercase
                tracking-[0.35em]

                ${
                  scrolled
                    ? "text-slate-500"
                    : "text-blue-100"
                }
                `}
              >

                DISTRIBUIDORA PET

              </p>

            </div>

          </Link>

          {/* MENU DESKTOP */}

          <nav className="hidden xl:flex items-center gap-10">
            {links.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                  className={`
                relative
                font-semibold

                transition

                ${
                  scrolled
                    ? "text-slate-700"
                    : "text-white"
                }

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-0.5
                after:w-0
                after:bg-blue-500
                after:transition-all

                hover:after:w-full
                `}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>
                    {/* LADO DIREITO */}

          <div className="hidden xl:flex items-center gap-4">

            {/* BUSCA */}

            <motion.div
              layout
              animate={{
                width: searchOpen ? 300 : 50,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
              flex
              items-center
              overflow-hidden
              rounded-full
              h-11
              px-4

              ${
                scrolled
                  ? "bg-slate-100"
                  : "bg-white/15"
              }
              `}
            >

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center justify-center"
              >

                <FaSearch
                  className={
                    scrolled
                      ? "text-slate-500"
                      : "text-white"
                  }
                />

              </button>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produtos..."
                className={`
                ml-4
                flex-1
                bg-transparent
                outline-none

                ${
                  scrolled
                    ? "text-slate-700 placeholder:text-slate-400"
                    : "text-white placeholder:text-white/70"
                }
                `}
              />

            </motion.div>

            {/* CTA */}

            <motion.button

              whileHover={{
                y: -3,
                scale: 1.03,
              }}

              whileTap={{
                scale: .97,
              }}

              className="
              flex
              items-center
              gap-3

              rounded-full

              bg-linear-to-r
              from-[#2563EB]
              to-[#3B82F6]

              h-12

              px-7

              font-semibold

              text-white

              shadow-lg

              transition-all

              duration-300

              hover:shadow-2xl

              hover:shadow-blue-500/30
              "

            >

              <FaFileAlt />

              Solicitar orçamento

            </motion.button>

          </div>

          {/* BOTÃO MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
            xl:hidden
            text-2xl
            transition

            ${
              scrolled
                ? "text-slate-800"
                : "text-white"
            }
            `}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </motion.div>

      </header>

      {/* MENU MOBILE */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: .25,
            }}

            className="
            fixed

            top-24

            left-4

            right-4

            z-40

            rounded-3xl

            bg-white

            p-8

            shadow-2xl

            xl:hidden
            "

          >

            <nav className="flex flex-col gap-6">

              {links.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                  border-b
                  border-slate-100
                  pb-4
                  text-lg
                  font-semibold
                  text-slate-700
                  hover:text-blue-600
                  transition
                  "
                >
                  {item.title}
                </Link>
              ))}
                            {/* BUSCA MOBILE */}

              <div className="relative mt-2">

                <FaSearch
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  "
                />

                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                  w-full
                  rounded-full
                  border
                  border-slate-200
                  py-3
                  pl-11
                  pr-4
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  "
                />

              </div>

              {/* CTA */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: .97,
                }}
                className="
                mt-2

                flex

                items-center

                justify-center

                gap-3

                rounded-full

                bg-linear-to-r

                from-[#2563EB]

                to-[#3B82F6]

                py-4

                font-semibold

                text-white

                shadow-lg

                transition-all

                duration-300

                hover:shadow-blue-500/30
                "
              >

                <FaFileAlt />

                Solicitar orçamento

              </motion.button>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}