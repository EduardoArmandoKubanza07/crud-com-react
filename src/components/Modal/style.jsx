import styled ,{ keyframes } from "styled-components";

const visilibility = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
    overflow: hidden;
    animation: ${visilibility} 2s ease-in-out forwards;

    position: fixed;
    top: 0;
    left: 0;
`;
export const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);

    background-color: #fff;
    border-radius: .5rem;
    box-shadow:  0 1px 3px rgba(0,0,0,0.3);
    padding: 1rem 1.5rem;
    width: 30rem;
    overflow: hidden;
`; 
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    > h1 {
        color: #00f;
        font-size: 1.8rem;
    }
    > button {
        background-color: #f00;
        color: #fff;
        cursor: pointer;
        transition:  all .5s ease-in-out;
        font-weight: 600;
        padding: .2rem .3rem;
        border-radius: .2rem;
    }
`;