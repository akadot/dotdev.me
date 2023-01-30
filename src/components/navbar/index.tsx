import colors from "src/styles/themes/colors";
import { Container, MenuContainer, MenuItem } from "./styles";

interface Props {
  handleTheme(theme_name: string): void;
}

const Navbar: React.FC<Props> = ({ handleTheme }) => {
  return (
    <Container>
      <h1>Logo</h1>
      <MenuContainer>
        <MenuItem
          href="/"
          bf_color={colors.yellow}
          onClick={() => handleTheme("home")}
        >
          início
        </MenuItem>
        <MenuItem
          href="/blog"
          bf_color={colors.green}
          onClick={() => handleTheme("blog")}
        >
          blog
        </MenuItem>
        <MenuItem
          href="/projects"
          bf_color={colors.purple}
          onClick={() => handleTheme("projects")}
        >
          projetos
        </MenuItem>
        <MenuItem
          href="/contact"
          bf_color={colors.red}
          onClick={() => handleTheme("contact")}
        >
          contato
        </MenuItem>
      </MenuContainer>
      <section>
        <h1>Lang</h1>
      </section>
    </Container>
  );
};

export default Navbar;
