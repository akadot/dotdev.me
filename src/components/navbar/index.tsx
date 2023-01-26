import colors from "src/styles/themes/colors";
import { Container, MenuContainer, MenuItem } from "./styles";

interface Props {
  toggleTheme(themeSelected: string): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      {/* Logo */}
      <h1>Logo</h1>
      {/* Menu */}
      <MenuContainer>
        <MenuItem
          href="/"
          bf_color={colors.yellow}
          onClick={() => toggleTheme("home")}
        >
          início
        </MenuItem>
        <MenuItem
          href="/blog"
          bf_color={colors.green}
          onClick={() => toggleTheme("blog")}
        >
          blog
        </MenuItem>
        <MenuItem
          href="/projects"
          bf_color={colors.purple}
          onClick={() => toggleTheme("projects")}
        >
          projetos
        </MenuItem>
        <MenuItem
          href="/contact"
          bf_color={colors.red}
          onClick={() => toggleTheme("contact")}
        >
          contato
        </MenuItem>
      </MenuContainer>
      {/* Theme */}
      <section>
        <h1>Lang</h1>
      </section>
    </Container>
  );
};

export default Navbar;
