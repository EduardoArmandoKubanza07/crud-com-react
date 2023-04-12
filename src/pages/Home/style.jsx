import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > h1 {
        font-size: 2rem;
        color: #00f;
        margin-bottom: 1rem;

        span {
            color: #fff;
            background-color: #00f;
            padding: .4rem .6rem;
            font-size: 2rem;
            border-radius: .4rem;
            box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
    }

    > p {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    > button {
        color: #fff;
        background-color: #00f;
        border: 2px solid #00f;
        font-weight: 600;
        font-size: 1.1rem;
        padding: .5rem 1.5rem;
        border-radius: .5rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: all .5s ease-in-out;

        &:hover {
            color: #00f;
            background-color: #fff;
        }
    }
`;