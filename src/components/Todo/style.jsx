import styled from "styled-components";

export const Container = styled.li`
    list-style: none;
    padding: .5rem 1rem;
    background-color: #fff;
    border-radius: .5rem;
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
        margin-bottom: 0;
    }

    > p {
        color: #00f;
        font-size: 1.1rem;
        font-weight: 600;
    }

    > div {
        display: flex;
        align-items: center;

        button {
            border: 2px solid #00f;
            border-radius: .5rem;
            padding: .4rem 1rem;
            font-weight: 600;
            color: #fff;
            background-color: #00f;
            transition: all .5s ease-in-out;
            cursor: pointer;
            margin-right: 1rem;

            &:last-child{
                margin-right: 0;
            }

            &:hover {
                color: #00f;
                background-color: #fff;
            }
        }
    }
`;