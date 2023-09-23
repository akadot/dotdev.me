import styled from 'styled-components';

const Container = styled.main`
    display: flex;
    flex-direction: row;
    row-gap: 0.8rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const About = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 40%;
    row-gap: 0.8rem;
`;

export {Container, About};