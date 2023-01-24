import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, MenuContainer, MenuItem } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      {/* Logo */}
      <h1>Logo</h1>
      {/* Menu */}
      <MenuContainer>
        <MenuItem href="/" bf_color="#FEEF2A">
          início
        </MenuItem>
        <MenuItem href="/blog" bf_color="#05FF69">
          blog
        </MenuItem>
        <MenuItem href="/projects" bf_color="#9C6CFF">
          projetos
        </MenuItem>
        <MenuItem href="/contact" bf_color="#FF5277">
          contato
        </MenuItem>
      </MenuContainer>
      {/* Theme */}
      <section>
        <button onClick={toggleTheme}>Change Theme</button>
        <h1>Lang</h1>
      </section>
    </Container>
  );
};

export default Navbar;
