import styled from "styled-components";

export const ContainerDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SpecsArtwork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`;

export const SpecsItem = styled.li`
    font-size: 15px;
    padding: 5px;
    margin-right: 30px;
    user-select: none;
    font-family: 'Montserrat', sans-serif;
`;

export const ControllAdd = styled.div`
    display: flex;
    margin: 30px;
`;

export const StockInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
`;

export const ButtonStock = styled.button`
    width: 30px;
    height: 30px;
    background: #000;
    color: #fff;
    border: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #273746;
    }
`;

export const ShowNumber = styled.div`
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    border: 1px solid black;
    font-family: 'Montserrat', sans-serif;
`;

export const ContainerButtomCart = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const PricePrevious = styled.small`
    margin-right: 15px;
    text-decoration: line-through;
    font-size: 15px;
    color: #6E2C00;
`;

export const PriceActual = styled.p`
    margin-right: 15px;
    font-weight: 600;
    color: #2C3E50;
    letter-spacing: 2px;
`;

export const PorcentageOffer = styled.p`
    margin-right: 15px;
    font-size: 15px;
`;

export const TextOffer = styled.p`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color: #6E2C00;
    margin-top: 12px;
`;