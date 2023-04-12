import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 4rem;
    background-color: #f5f5f5;
    padding: 0 5%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    > h1 {
        color: #00f;
        font-size: 2rem;
    }
`;