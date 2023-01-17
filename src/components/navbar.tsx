import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import Link from 'next/link'
import style from '../styles/Navbar.module.scss'


export default function Navbar(){
    const {theme, setTheme} = useContext(ThemeContext);

    function handleTheme(){
        if(theme === 'dark'){
            setTheme('light')
        }else if(theme === 'light'){
            setTheme('dark')
        }
    }

    return (
        <section className={`${style.container} ${theme}`}>
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
                <button onClick={handleTheme}>Change Theme</button>
                <h1>Lang</h1>
            </section>
        </section>
    )
}