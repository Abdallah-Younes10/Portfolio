import React from "react";

export const Links = () => {
  const links = [
    {
      title: "Email",
      desc: "3mranyounes10@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16v16H4V4z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l8 6 8-6" />
        </svg>
      ),
    },
    {
      title: "Phone",
      desc: "+20 1205481100",
      icon: (
        <svg
          className="w-5 h-5 text-[#287f03]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.518 4.55a1 1 0 01-.272 1.043l-1.3 1.3a16 16 0 006.586 6.586l1.3-1.3a1 1 0 011.043-.272l4.55 1.518a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      desc: "abdallah-younes",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A66C2]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.982 1.982 0 1 1 0-3.964 1.982 1.982 0 0 1 0 3.964zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      href:"https://www.linkedin.com/in/abdallah-younes-34b59a234?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      title: "GitHub",
      desc: "Abdallah-Younes10",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.603-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 6.003 0c2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      href:"https://github.com/Abdallah-Younes10"
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {links.map((link, index) => (
        <a href={link.href}> <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl border border-cyan-600/30 bg-slate-900/50 hover:border-cyan-400 transition"
        >
          <div className="text-2xl">{link.icon}</div>

          <div>
            <h3 className="font-semibold text-white">{link.title}</h3>

            <p className="text-slate-400">{link.desc}</p>
          </div>
        </div></a>
       
      ))}
    </div>
  );
};
