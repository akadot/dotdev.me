'use client'
import Typewriter from 'typewriter-effect';
import { Container } from '@/app/styles/pages/index'

export default function Home() {
  return (
    <Container>
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

    </Container>
  )
}
