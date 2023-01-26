import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.main};
`;

const Contact: React.FC = () => {
  return (
    <>
      <main>
        <section>
          <Text>Contact</Text>
        </section>
        <section></section>
      </main>
    </>
  );
};
export default Contact;
