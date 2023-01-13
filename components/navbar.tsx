import Link from 'next/link'
import style from '../styles/Navbar.module.scss'

export default function Navbar(){
    return (
        <section className={style.container}>
            {/* Logo */}
            <h1>Logo</h1>
            {/* Menu */}
            <nav>
                <Link href='/'>Inicio</Link>
                <Link href='/about'>Sobre</Link>
            </nav>
            {/* Theme */}
            <h1>Theme</h1>
        </section>
    )
}