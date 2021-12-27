import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const ContainerMenu = styled.div`
    width: 100%;
	height: 40px;
`;  

export const ItemsMenu = styled.ul`
    width: 100%;
	height: 100%;
	background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemMenu = styled.li`
	margin: 0 15px;
	padding: 10px 15px;
    cursor: pointer;

    &:hover{
        background: #EAECEE;

        .submenu{
            visibility: visible;
        }
    }
`;

export const LinkItemMenu = styled.a`
    text-decoration: none;
	color: #000;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 5px;
	font-size: 12px;
	display: block;
	font-family: 'Open Sans', sans-serif;
`;

export const SubMenu = styled.div`
    position: absolute;
	background: #fff;
	min-width: 10%;
	height: 500px;
	overflow: scroll;
	padding: 20px 15px 0 15px;
	visibility: hidden;
	line-height: 24px;
  	z-index: 100;
    border: 1px solid #D5D8DC;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: -15px;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const SubMenuItem = styled.a`
    font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	margin: 0 15px 20px 0;
    display: flex;
    flex-direction: column;
`;

// https://csshint.com/css-shopping-cart-ui-ux/ 