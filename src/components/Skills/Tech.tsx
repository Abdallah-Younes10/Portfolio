import React from "react";

export const Tech = () => {
  const techs = [
    {
      title: "Language",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "C++",
        "SQL",
      ],
      icon:(
        <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6 text-cyan-400"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
      )
    },
    {
      title: "Frameworks",
      skills: ["React", "Redux Toolkit", "Laravel"],
      icon:(
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 text-cyan-400 shrink-0">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
      )
    },
    {
      title: "Styling",
      skills: ["Tailwind", "Bootstrap", "Sass", "Framer Motion"],
      icon:(
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 text-cyan-400 shrink-0">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
              </svg>
      )
    },
    {
      title: "Tools & Other",
      skills: [
        "Git & GitHub",
        "RESTful APIs",
        "VS Code",
        "Vercel",
        "MySQL",
        "Formik / Yup",
      ],
      icon:(
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 text-cyan-400 shrink-0">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
      )
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  p-5">
      {techs.map((item, index) => (
        <div
          key={index}
          className="border border-cyan-600/40 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:-translate-y-1 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-5">
            {item.icon}

            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            {item.skills.map((skill, skillIndex) => (
              <p
                key={skillIndex}
                className="py-2 px-4 border rounded-xl border-cyan-600"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
