'use client'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main>
      <p>dot</p>
      <Typewriter options={{
        strings: ['developer.', 'designer.', 'writer.', 'student.'],
        autoStart: true,
        loop: true,
        delay: 'natural',
        deleteSpeed: 'natural',
        skipAddStyles: true,
        cursor:"_",
        cursorClassName: "cursor",
        wrapperClassName: "typewriter",
      }} />
    </main>
  )
}
