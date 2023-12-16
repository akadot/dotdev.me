"use client"
import { useState } from 'react';
import Link from 'next/link';

import styles from '@/app/styles/components/header.module.scss';

export default function Header() {
    const [theme, setTheme] = useState("dark");

    const changeThemeTo = (theme: string) => {
        setTheme(theme);
    }

    return (
        <header className={styles.container}>
            <Link href="/" className={styles.title}>dot</Link>
            <nav className={styles.menu}>
                <Link className={styles.pages} href="/me">me</Link>
                <Link className={styles.pages} href="/posts">posts</Link>
                <Link className={styles.pages} href="/projects">projects</Link>
                <Link className={styles.pages} href="/tetris">tetris</Link>
            </nav>
            <section className={styles.theme}>
                {theme == "dark" ?
                    <svg onClick={() => changeThemeTo("light")} className={styles.theme_moon} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.45rem" width="1.45rem" xmlns="http://www.w3.org/2000/svg">
                        <title>to light</title>
                        <defs>
                            <linearGradient id="svg_gradient" gradientTransform="rotate(65)">
                                <stop offset="0%" stopColor="#e63946" />
                                <stop offset="25%" stopColor="#ffbe0b" />
                                <stop offset="50%" stopColor="#39A0ED" />
                                <stop offset="75%" stopColor="#9b5de5" />
                                <stop offset="100%" stopColor="#50fa7b" />
                            </linearGradient>
                        </defs>
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    :
                    <svg onClick={() => changeThemeTo("dark")} className={styles.theme_sun} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1.45rem" width="1.45rem" xmlns="http://www.w3.org/2000/svg">
                        <title>to dark</title>
                        <defs>
                            <linearGradient id="svg_gradient" gradientTransform="rotate(65)">
                                <stop offset="0%" stopColor="#e63946" />
                                <stop offset="25%" stopColor="#ffbe0b" />
                                <stop offset="50%" stopColor="#39A0ED" />
                                <stop offset="75%" stopColor="#9b5de5" />
                                <stop offset="100%" stopColor="#50fa7b" />
                            </linearGradient>
                        </defs>
                        <path d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"></path>
                    </svg>
                }
            </section>
        </header>
    )
}