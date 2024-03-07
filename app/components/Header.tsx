"use client"
import { useState } from 'react';
import Link from 'next/link';

import styles from '@/app/styles/components/header.module.scss';

export default function Header() {
    const [lang, setLang] = useState("ptbr");

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
                {lang == "ptbr" ?
                    <p onClick={() => changeLangTo("enus")}>PT</p>
                    :
                    <p onClick={() => changeLangTo("ptbr")}>EN</p>
                }
            </section>
        </header>
    )
}