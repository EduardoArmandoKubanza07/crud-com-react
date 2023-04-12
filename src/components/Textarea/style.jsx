import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 8rem;
    resize: none;
    background-color: #f5f5f5;
    border: 2px solid #f5f5f5;
    border-radius: .5rem;
    padding: .8rem 1rem;
    outline: none;
    box-shadow:  0 1px 2px rgba(0,0,0,0.2);
    transition: all .5s ease-in-out;
    margin-bottom: 1rem;

    &:focus {
        border-color: #00f;
    }
`;