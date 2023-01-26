import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.main};
`;

const Projects: React.FC = () => {
  return (
    <>
      <main>
        <section>
          <Text>Projects</Text>
        </section>
        <section></section>
      </main>
    </>
  );
};
export default Projects;
