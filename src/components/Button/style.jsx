import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    font-family: 600;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background-color: #00f;
    border: 2px solid #00f;
    border-radius: .5rem;
    transition: all .5s ease-in-out;
    cursor: pointer;
    padding: .5rem 0;

    &:hover {
        color: #00f;
        background-color: #fff;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: .3;
    }
`;