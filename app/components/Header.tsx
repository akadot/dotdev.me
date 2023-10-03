import Link from 'next/link'
import styles from '@/app/styles/components/header.module.scss'

export default function Header() {
    return (
        <main className={styles.container}>
            <Link href="/" className={styles.title}>dot</Link>
            <nav className={styles.menu}>
                <Link href="/me">about</Link>
                <Link href="/posts">posts</Link>
                <Link href="/projects">projects</Link>
                <Link href="/tetris">tetris</Link>
            </nav>
            <p>br | en</p>
        </main>
    )
}