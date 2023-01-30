import Typewriter from "typewriter-effect";
import { HomeContainer, TypewriterContainer, MainText } from "src/styles/Home";

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <section>
          <TypewriterContainer>
            <MainText>dot</MainText>
            <Typewriter
              options={{
                strings: ["developer", "designer", "writer", "student"],
                autoStart: true,
                loop: true,
              }}
            />
          </TypewriterContainer>
          <p>Made with 🌻🎧☕.</p>
        </section>
        <section></section>
      </HomeContainer>
    </>
  );
};

export default Home;
