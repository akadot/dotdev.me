"use client"
import {useEffect, useState} from 'react';
import { motion } from "framer-motion"

export default function Cursor() {
    const [mousePos, setMousePos] = useState({x:0,y:0})
    
    const [cursorVariant, setCursorVariant] = useState("default");

  
    useEffect(() => {
      const mouseMove = ( event: MouseEvent )  => {
        setMousePos({x:event.clientX, y:event.clientY});
      }
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => window.removeEventListener("mousemove", mouseMove);
    }, []);
  
    const dotVariant = {
      default:{x:mousePos.x, y:mousePos.y},
      link: {
        height: 150,
        width: 150,
      }
    };

    //const textEnter = () => setCursorVariant("text");
    //const textLeave = () => setCursorVariant("default");

    return (
        <motion.section 
            className="cursor_dot"
            variants={dotVariant}
            animate="default"
            transition={{
              type:'spring'
            }}
          />
    )
}