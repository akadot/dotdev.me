import Socials from '@/app/components/Socials'

import styles from '@/app/styles/pages/me.module.scss'

export default function Page() {
  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <p>Hi, I&apos;m <strong> Murilo Oliveira</strong>, a problem-solver, house gardener and an eternal student.</p>
        <p>Building rich and solid applications with <strong>C#</strong>, <strong>Javascript</strong>, <strong>Typescript</strong>, <strong>React</strong>, <strong>Next</strong> and <strong>Vue</strong>.</p>
        <p>Also drawing smart interfaces in <strong>Figma</strong> and writing cool stuffs about technology or anything else on my <strong>DEV.to</strong> and <strong>Medium</strong> account.</p>
        <p>See you.</p>
        <Socials />
      </section>
      <section className={styles.side_content}>
      </section>
    </main>
  )
}