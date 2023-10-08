import Link from 'next/link'
import styles from '@/app/styles/components/header.module.scss'

export default function Header() {
    return (
        <main className={styles.container}>
            <Link href="/" className={styles.title}>dot</Link>
            <nav className={styles.menu}>
                <Link className={styles.pages} href="/me">about</Link>
                <Link className={styles.pages} href="/posts">posts</Link>
                <Link className={styles.pages} href="/projects">projects</Link>
                <Link className={styles.pages} href="/tetris">tetris</Link>
            </nav>
            <p>br | en</p>
        </main>
    )
}