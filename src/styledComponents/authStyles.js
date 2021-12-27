import styled, { keyframes } from 'styled-components';

// ===============================
// Login
// ===============================

export const CardLogin = styled.div`
    align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
`;

const show = keyframes`
    0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
`;

export const ContainerLogin = styled.div`
    background-color: #fff;
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	width: 80%;
	height: 580px;

    div.sign-up-container {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(100%);',
                    opacity: '1;',
                    zIndex: '5;'
                }
            } 
        }}
        animation: ${ show } 0.6s;
    }
    

    div.sign-in-container {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(100%);'
                }
            } 
        }}
    }

    div.overlay__container {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(-100%);'
                }
            } 
        }}
    }

    div.overlay {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(50%);'
                }
            } 
        }}
    }

    div.overlay-left {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(0);'
                }
            } 
        }}
    }

    div.overlay-right {
        ${ ({ reverse }) => {
            if(reverse){
                return {
                    transform: 'translateX(20%);'
                }
            } 
        }}
    }
`;

export const FormContainer = styled.div`
    position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;

    &.sign-up-container {
        left: 0;
	    width: 50%;
	    opacity: 0;
	    z-index: 1;
    }

    &.sign-in-container {
        left: 0;
	    width: 50%;
	    z-index: 2;
    }
`;

export const FormAuth = styled.form`
    background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
    width: 100%;
`;

export const TitleLogin = styled.h1`
    font-weight: bold;
	margin-bottom: 20px;
	font-size: 30px;
`;

export const SocialContainer = styled.div`
    margin: 20px 0;
`;

export const ItemSocial = styled.a`
    border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;

    &.social {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 10px;
    }
`;

export const Input = styled.input`
    position: relative;
	background-color: #eee;
	border: none;
	padding: 13px 15px;
	outline: none;
	font-size: 15px;

    &::placeholder {
        font-size: 15px;
    }
`;

export const Span = styled.span`
    font-size: 15px;
	margin-bottom: 10px;
`;

export const Button = styled.button`
    border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: ${ ({ ghost }) => ghost ? 'transparent' : '#FF4B2B' };
    border-color: ${ ({ ghost }) => ghost ? '#fff' : '#FF4B2B' };
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`;

export const OverlayContainer = styled.div`
    position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
`;

export const Overlay = styled.div`
    background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
    position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transition: transform 0.6s ease-in-out;

    &.overlay-left {
	    transform: translateX(-20%);
    }

    &.overlay-right {
	    right: 0;
	    transform: translateX(0);
    }
`;

export const TextLogin = styled.div`
    font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 35px 0;
`;

export const ContainerInput = styled.div`
    position: relative;
	width: 100%;
	display: ${ ({ inline }) => inline ? 'inline' : 'flex' };
	margin-bottom: 25px;
`;

export const InputError = styled.div`
    position: relative;
	margin: 0 10px 0 10px;
`;

export const TextError = styled.p`
    font-size: 12px;
	margin: 0;
	padding: 0;
	display: flex;
	padding: 3px 0 0 10px;
	color: red;
`;

// ===============================
// End Login
// ===============================