import { useEffect, useRef } from "react";
import { imgs } from "./imgs";
import img from "../../assets/person-pic/156.png"
export const HeroImg = () => {
  // const imgRef = useRef<HTMLImageElement | null>(null);

  // useEffect(() => {
  //   let frame = 0;
  //   let direction = 1;

  //   const interval = window.setInterval(() => {
  //     if (frame === 150) {
  //       direction = -1;
  //     }

  //     if (frame === 32 && direction === -1) {
  //       direction = 1;
  //     }

  //     frame += direction;

  //     if (imgRef.current) {
  //       imgRef.current.src = imgs[frame];
  //     }
  //   }, 60);

  //   return () => window.clearInterval(interval);
  // }, []);

  return (
    // <img
    //   ref={imgRef}
    //   src={imgs[0]}
    //   alt="Hero Animation"
    //   className="w-140 h-180 object-cover z-50"
    // />
    <img src={img} className="w-140 h-180 object-cover z-50" ></img>
  );
};
