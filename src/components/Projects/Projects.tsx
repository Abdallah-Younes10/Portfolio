import React from "react";
import CardSwap, { Card } from "./Cards";
import TravelVerse from "../../assets/ProjectsPic/TravelVerse.png";
import AdminDash from "../../assets/ProjectsPic/AdminDash.jpg";
import Astronova from "../../assets/ProjectsPic/Astronova.png";
import { ProCard } from "./ProCard";
// import { motion } from "framer-motion";

export const Projects = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: false, amount: 0.2 }}
    //   transition={{ duration: 0.8 }}
    // >
    <div className="w-full h-full overflow-hidden z-50">
      <div className="mt-20 flex flex-col justify-center items-center">
        <div className=" flex w-full flex-col lg:flex-row justify-around items-center overflow-hidden  gap-6 ">
          <h1
            style={{ fontFamily: "Fredericka the Great" }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Selected Work
          </h1>
          <div className="h-125 lg:w-150 hidden lg:inline-flex  mt-50">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <p className="p-3">TravelVerse</p>
                <img src={TravelVerse} alt="" className="h-90 rounded-xl" />
              </Card>
              <Card>
                <h3 className="p-3">AdminDash</h3>
                {/* <p>Your content here</p> */}
                <img src={AdminDash} alt="" className="h-90 rounded-xl" />
              </Card>
              <Card>
                <h3 className="p-3">Astronova</h3>
                {/* <p>Your content here</p> */}
                <img src={Astronova} alt="" className="h-90 rounded-xl" />
              </Card>
            </CardSwap>
          </div>
        </div>
        <div className="flex justify-around w-full items-center">
          <ProCard  />
        </div>
        <a
          href="https://github.com/Abdallah-Younes10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
        >
          View all on GitHub
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.603-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 6.003 0c2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
    // </motion.div>
  );
};
