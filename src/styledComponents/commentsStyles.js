import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CommentAdd = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 30px;
`;

export const CommentSend = styled.div`
    display: flex;
`;

export const InputComment = styled.input`
    padding: 10px;
    border: 0;
    width: 100%;
    border-bottom: 1px solid #273746;
    outline: none;
    font-family: 'Montserrat', sans-serif;
`;

export const ButtomSend = styled.button`
    border: 0;
    outline: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    font-size: 30px;
    padding: 10px;
    color: #99A3A4;

    &:hover {
        color: #2C3E50;
    }
`;

export const Text = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
`;

export const CommentsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
`;

export const Comment = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #B2BABB;
    border-left: none;
    border-right: none;
    margin-bottom: 15px;
`;

export const UserComment = styled.p`
    font-size: 15px;
    margin: 15px;
`;

export const TextComment = styled.p`
    font-size: 20px;
    align-self: center;
`;

export const HourDateComment = styled.p`
    align-self: flex-end;
    font-size: 13px;
    margin: 15px;
    font-style: italic;
`;