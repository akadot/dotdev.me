import styled from "styled-components";
import Link from "next/link";
import colors from "src/styles/themes/colors";

interface MenuItemProps {
  bf_color: string;
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.nav`
  display: flex;
`;

const MenuItem = styled(Link)<MenuItemProps>`
  padding: 0 2rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 0.2rem;
    height: 130%;
    background-color: ${(props) => props.bf_color};
    top: -0.2rem;
    left: 1.5rem;
    transform: skewX(-25deg);
    z-index: -1;
    transition: all 0.2s ease-in-out;
  }

  &:hover::before {
    width: 65%;
  }
  &:hover {
    color: ${colors.primary};
  }
`;

export { Container, MenuContainer, MenuItem };
