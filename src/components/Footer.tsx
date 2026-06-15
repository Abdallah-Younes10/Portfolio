import React from "react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Abdallah-Younes10",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.603-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 6.003 0c2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdallah-younes-34b59a234?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.982 1.982 0 1 1 0-3.964 1.982 1.982 0 0 1 0 3.964zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full mt-20 border-t border-cyan-600/20 bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          AY
        </a>

        {/* Copyright */}
        <p className="text-slate-400 text-center">
          Designed & Built by Abdullah Younes © 2026
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              aria-label="Links"
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2
                rounded-lg
                border
                border-cyan-600/30
                text-slate-300
                hover:text-cyan-400
                hover:border-cyan-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {item.icon}
            </a>
          ))}

          {/* Scroll To Top */}
          <button
          aria-label="Open menu"
            onClick={scrollToTop}
            className="
              p-2
              rounded-lg
              border
              border-cyan-600/30
              text-cyan-400
              hover:bg-cyan-500/10
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "

          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};