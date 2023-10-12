'use client'
import Typewriter from 'typewriter-effect';
import Socials from '@/app/components/Socials'

import styles from '@/app/styles/pages/index.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <section>
        <p>dot</p>
        <Typewriter options={{
          strings: ['developer.', 'designer.', 'writer.', 'student.'],
          autoStart: true,
          loop: true,
          delay: 'natural',
          deleteSpeed: 'natural',
          skipAddStyles: true,
          cursor:"_",
          cursorClassName: styles.cursor,
          wrapperClassName: styles.typewriter,
        }} />
      </section>
      <Socials/>
    </main>
  )
}
