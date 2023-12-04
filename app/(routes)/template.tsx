"use client"
// import {useEffect, useState} from 'react';

import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  // const [mousePos, setMousePos] = useState({x:0,y:0})
  
  // useEffect(() => {
  //   const mouseMove = ( event: MouseEvent )  => {
  //     setMousePos({x:event.clientX, y:event.clientY});
  //   }

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => window.removeEventListener("mousemove", mouseMove);
  // }, []);

  // const variants = {
  //   default:{x:mousePos.x, y:mousePos.y}
  // };
  
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
      {/* <motion.section 
        className="customCursor"
        variants={variants}
        animate="default"
      /> */}
    </motion.main>
  )
}