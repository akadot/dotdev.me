"use client"
import {useEffect, useState} from 'react';
import { motion } from "framer-motion"

export default function Cursor() {
    const [mousePos, setMousePos] = useState({x:0,y:0})
  
    useEffect(() => {
      const mouseMove = ( event: MouseEvent )  => {
        setMousePos({x:event.clientX, y:event.clientY});
      }
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => window.removeEventListener("mousemove", mouseMove);
    }, []);
  
    const cursorVariants = {
      default:{x:mousePos.x, y:mousePos.y}
    };

    return (
        <motion.section 
            className="customCursor"
            variants={cursorVariants}
            animate="default"
            transition={{
              bounce: 0,
              delay:0,
              bounceDamping:0,
              bounceStiffness:0,
              damping:0,
              restSpeed:0,
              type:false

            }}
          />
    )
}