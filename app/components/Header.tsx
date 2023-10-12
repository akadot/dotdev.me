import Link from 'next/link'

import {FiSun, FiMoon} from 'react-icons/fi'

import styles from '@/app/styles/components/header.module.scss'

export default function Header() {
    return (
        <main className={styles.container}>
            <Link href="/" className={styles.title}>dot</Link>
            <nav className={styles.menu}>
                <Link className={styles.pages} href="/me">me</Link>
                <Link className={styles.pages} href="/posts">posts</Link>
                <Link className={styles.pages} href="/projects">projects</Link>
                <Link className={styles.pages} href="/tetris">tetris</Link>
            </nav>
            <section>
                <p>br | en</p>
                <FiSun/>
                <FiMoon/>
            </section>
        </main>
    )
}