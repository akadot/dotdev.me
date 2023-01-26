import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.main};
`;

const Home: React.FC = () => {
  return (
    <>
      <main>
        <section>
          <Text>Made with 🌻🎧☕.</Text>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default Home;
