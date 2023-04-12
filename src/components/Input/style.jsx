import styled from "styled-components";

export const Container = styled.input`
    width: 100%;
    background-color: #f5f5f5;
    border: 2px solid #f5f5f5;
    border-radius: .5rem;
    padding: .6rem 1rem;
    outline: none;
    transition: all .5s ease-in-out;
    margin-bottom: 1rem;

    &:focus {
        border-color: #00f;
    }
`;