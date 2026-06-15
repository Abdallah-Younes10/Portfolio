
import { HeroText } from "./HeroText";
import { HeroImg } from "./HeroImg";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full justify-around lg:h-screen  text-center gap-6 px-4 top-0 left-0 z-50">

      <div className="flex flex-col items-  p-6 justify-center gap-6 w-full z-10 text-left ">
        <HeroText />
        <div className="flex gap-4 ml-8">
          <button className="px-8 py-3 rounded-md bg-cyan-500 text-black font-bold hover:scale-105 transition">
            <a href="../../public/Younes_cv.pdf" download>
            Download CV
            </a>
          </button>
          <button className="px-8 py-3 rounded-md border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition">
          <a href="#contact" >
                      Contact Me

          </a>
          </button>
        </div>
      </div>

      <div className=" flex justify-center items-center w-full h-full">
       <HeroImg />
      </div>
    </div>
    </motion.div>
  );
};
