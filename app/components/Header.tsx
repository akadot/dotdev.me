"use client"
import { useState } from 'react'
import Link from 'next/link'

import { FiSun, FiMoon } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

import styles from '@/app/styles/components/header.module.scss'

export default function Header() {
    const [lang, setLang] = useState("en");
    const [theme, setTheme] = useState("dark");

    const changeThemeTo = (theme: string) => {
        setTheme(theme);
    }

    const changeLangTo = (lang: string) => {
        setLang(lang);
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
                    <FiMoon size='1.3rem' title='to light' onClick={() => changeThemeTo("light")}/>
                    :
                    <FiSun size='1.3rem' title='to dark' onClick={() => changeThemeTo("dark")} />}
            </section>
        </header>
    )
}