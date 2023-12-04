"use client"
import {useEffect, useState} from 'react';
import { motion } from "framer-motion"

// import { Metadata } from 'next'

import '@/app/styles/globals.scss'

import Header from '@/app/components/Header'

// export const metadata: Metadata = {
//   title: 'dot',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    
    <html lang="pt-br">
      <body>
          <motion.section 
            className="customCursor"
            variants={cursorVariants}
            animate="default"
          />
          <Header/>
          {children}
          <span>made with 🌻 ☕ 🎧 💖 by myself ©2023</span>
        </body>
    </html>
  )
}
