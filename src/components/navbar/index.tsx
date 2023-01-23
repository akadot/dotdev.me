import {Container, MenuContainer, MenuItem} from './styles'

export default function Navbar(){
    return (
        <Container>
            {/* Logo */}
            <h1>Logo</h1>
            {/* Menu */}
            <MenuContainer>
                <MenuItem href='/' bfColor="#FEEF2A">início</MenuItem>
                <MenuItem href='/blog' bfColor="#05FF69">blog</MenuItem>
                <MenuItem href='/projects' bfColor="#9C6CFF">projetos</MenuItem>
                <MenuItem href='/contact' bfColor="#FF5277">contato</MenuItem>
            </MenuContainer>
            {/* Theme */}
            <section>
                <button>Change Theme</button>
                <h1>Lang</h1>
            </section>
        </Container>
    )
}
