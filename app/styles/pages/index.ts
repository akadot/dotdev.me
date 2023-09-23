import styled from 'styled-components';


const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    & p, & .typewriter{
        font-size: 6rem;
        font-weight: 600;
    }

    & .cursor{
        font-size: 5rem;
        font-weight: 500;
    }
    
`;


export {Container};