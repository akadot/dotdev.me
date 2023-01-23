import Link from 'next/link'

export default function Navbar(){
    return (
        <section>
            {/* Logo */}
            <h1>Logo</h1>
            {/* Menu */}
            <nav>
                <Link href='/'>inicio</Link>
                <Link href='/blog'>blog</Link>
                <Link href='/projects'>projetos</Link>
                <Link href='/contact'>contato</Link>
            </nav>
            {/* Theme */}
            <section>
                <button>Change Theme</button>
                <h1>Lang</h1>
            </section>
        </section>
    )
}
