"use client"
import {useEffect, useState} from 'react';

import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({x:0,y:0})
  
  // useEffect(() => {
  //   const mouseMove = e => {
  //     setMousePos({});
  //   }
  // }, )
  
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
      <section className="customCursor"></section>
    </motion.main>
  )
}