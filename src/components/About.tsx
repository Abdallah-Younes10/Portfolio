import img from "../assets/person-pic/040.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    <section
      id="about"
      className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-12 border-y rounded-4xl border-cyan-500"
    >
      {/* Image */}
      <div className="hidden lg:flex justify-center ">
        <img
          src={img}
          alt="Abdullah Younes"
          className="max-w-md w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h1
          style={{ fontFamily: "Fredericka the Great" }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Who Am I
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-400">
          I'm a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications using React and modern web technologies.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-400">
          Beyond development, I enjoy taking on challenges and participating in competitions. One of my proudest achievements was securing 1st place in a NASA competition, which strengthened my teamwork and problem-solving skills.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-400">
          I believe in continuous learning and self-improvement. Currently, I'm focused on advancing my technical skills, improving my English, and building projects that create real value.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 p-6 border border-slate-800 rounded-2xl bg-">
          <div className="text-center">
            <h3 className="text-3xl font-bold">6+</h3>
            <p className="text-sm md:text-base text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm md:text-base text-gray-400">
              Technologies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-sm md:text-base text-gray-400">
              Years Learning
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-start">
          <div className="flex gap-3">
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
            <p className="text-gray-400">3mranyounes10@gmail.com</p>
          </div>
          <div className="flex gap-3">
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
            <p className="text-gray-400">+20 1205481100</p>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};