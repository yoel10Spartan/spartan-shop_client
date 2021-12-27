import styled from 'styled-components';

export const Navigation = styled.div`
    position: relative;
    height: 70px;
`;

export const ContainerMenu = styled.div`
    max-width: 117rem;
    margin: 0 auto;
    padding: 0 1.6rem;
`;

export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 1rem;
`;

export const NavLogo = styled.div`

    &:nth-child(1){
        font-size: 20px;
        color: var(--black);
        padding: 1.6rem;
        font-weight: 700;
    }
`;

export const WrapSearch = styled.div`
    width: 30%;
    top: 50%;
    left: 50%;
    margin-left: 50px;
`;

export const Search = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`;

export const NavIcons = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    .bx {
        color: #566573;
        margin-right: 25px;
        font-size: 23px;
    }
`;

export const NameUser = styled.p`
    display: flex;
    align-items: center;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    user-select: none;
`;

export const SubMenuUser = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: -35px;
    margin-top: 0px;
    visibility: hidden;
    z-index: 1000000;
    background-color: #fff;
    font-size: 15px;
    width: 110px;
    height: 130px;
    padding: 10px;
    border: 1px solid #E5E8E8;
    border-radius: 5px;
`;

export const ItemSubMenuUser = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 5px 1px;
`;

export const MenuUser = styled.a`
    &:hover {
        div {
            visibility: visible;
        }
    }
`;