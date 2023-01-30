import styled from "styled-components";
import colors from "./themes/colors";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 2rem 0;
`;

const TypewriterContainer = styled.section`
  color: ${(props) => props.theme.main};
  font-size: 5rem;
  font-weight: 900;
`;

const MainText = styled.p`
  color: ${colors.secondary};
`;

export { HomeContainer, TypewriterContainer, MainText };
