'use client'
import styled from 'styled-components';
import Link from 'next/link';
import {keyframes} from 'styled-components'

const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & svg{
        cursor: pointer;
    }
`;

const Title = styled(Link)`

font-weight: 500;
font-size: 1.2rem;

`;


const hover_link = keyframes`
    0% {
        width: 0;
        height: 0;
    }

    60% {
        height: 1rem;
        width: .2rem;
    }

    100% {
        height: 1rem;
        width: 120%;
    }

`;

const Menu = styled.nav`
display: flex;
column-gap: 1.5rem;

& a {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    transition: color 1s ease;

    &::before {
        content: "";
        background-color: aliceblue;
        position: absolute;
        bottom: 0;
        left: -0.3rem;
        transform: skewX(-10deg);
        z-index: -1;
    }

    &:hover {
        color: #1E1E1E;

        &::before {
            animation: ${hover_link} .8s forwards;
        }

    }


}`;


export {Container, Menu, Title}