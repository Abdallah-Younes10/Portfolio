import {  useState } from "react";


const navigation = [
  // { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative top-10  z-50 
  transition-all duration-500 ease-in-out 
`}
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 scale-100 bg-cyan-500/20 blur-[80px]" />

      {/* Navbar */}
      <div className="relative w-90 lg:w-220 h-25">
        {/* SVG Frame */}
        <svg
          viewBox="0 0 1000 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Outer Glow Border */}
          <path
            d="
            M40 5
            H420
            L450 25
            H550
            L580 5
            H960
            L995 40
            V60
            L960 95
            H40
            L5 60
            V40
            Z
            "
            fill="transparent"
            stroke="#00E5FF"
            strokeWidth="2"
          />

          {/* Top Highlight */}
          <path
            d="
            M430 5
            H570
            L550 20
            H450
            Z
            "
            fill="#00E5FF"
          />

          {/* Bottom Decoration */}
          <rect x="430" y="88" width="140" height="4" fill="#00E5FF" />
        </svg>

        {/* Extra Glow Border */}
        {/* <div className="absolute inset-0 rounded-xl border border-cyan-400/40 blur-sm" /> */}

        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-between px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-cyan-300 tracking-wider">
              AY
            </span>
          </div>

          {/* Links */}
          <div className="hidden lg:flex gap-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-gray-300
                  transition-all
                  duration-300
                  hover:text-cyan-300
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-cyan-300
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
            
          </div>

          {/* Mobile Links */}
          {open && (
            <div className="lg:hidden flex flex-col gap-4 p-4 absolute top-full right-0 mt-2 bg-gray-800 rounded-md shadow-lg z-50 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Button */}
          <button
            className="hidden lg:inline-flex relative px-8 py-3 text-cyan-300 font-semibold border border-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.5)] "
            style={{
              clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)",
            }}
          >
            <a href="../../public/Younes_cv.pdf" download>
              Resume
            </a>
            
          </button>

          {/* open icon for mobile */}
          <button
            className="lg:hidden text-gray-300 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
           {
            !open ? <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            : <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
           }

          </button>
        </div>
      </div>
    </div>
  );
}
