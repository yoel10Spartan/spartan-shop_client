import styled from 'styled-components';

export const ImagesContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    align-items: center;
`;

export const DefaultImage = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #808B96;
    margin-top: 30px;
`;

export const Image = styled.img`
    z-index: 10000;
    width: 300px;
    height: 300px;
    object-fit: contain;
    transition: .5s ease;

    &:hover {
        position: relative;
        width: 310px;
        height: 310px;
    }
`;

export const ContainerAllImages = styled.div`
    width: 700px;
    height: 150px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const ContainerImage = styled.div`
    border: 1px solid #808B96;
    padding: 10px;
    margin: 0 10px 0 10px;
`;

export const ImageSmall = styled.img`
    width: 130px;
    height: 130px;
    user-select: none;
    cursor: pointer;
`;