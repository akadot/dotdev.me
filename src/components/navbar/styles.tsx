import styled from "styled-components";
import Link from 'next/link'

interface MenuItemProps {
	bfColor:string
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
	transition: all .2s ease-in-out;

	&::before{
		content: "";
		position: absolute;
		width: .2rem;
		height: 130%;
		background-color: ${(props) => props.bfColor};
		top: -0.2rem;
		left: 1.5rem;
		transform: skewX(-25deg);
		z-index: -1;
		transition: all .2s ease-in-out;
	}

	&:hover::before{
		width: 65%;
	}
	&:hover{
		color: #000;
	}
`;


export { Container, MenuContainer, MenuItem };