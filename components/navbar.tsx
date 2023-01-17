import Link from 'next/link'
import style from '../styles/Navbar.module.scss'

export default function Navbar(){
    return (
        <section className={style.container}>
            {/* Logo */}
            <h1>Logo</h1>
            {/* Menu */}
            <nav className={style.menu_container}>
                <Link href='/' className={style.menu_item}>Inicio</Link>
                <Link href='' className={style.menu_item}>Blog</Link>
                <Link href='' className={style.menu_item}>Projetos</Link>
                <Link href='' className={style.menu_item}>Contato</Link>
            </nav>
            {/* Theme */}
            <section>
                <h1>Theme</h1>
                <h1>Lang</h1>
            </section>
        </section>
    )
}