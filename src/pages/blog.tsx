import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.main};
`;

const Blog: React.FC = () => {
  return (
    <>
      <main>
        <section>
          <Text>Blog</Text>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default Blog;
