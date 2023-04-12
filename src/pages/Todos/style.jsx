import styled from "styled-components"; 

export const Container = styled.div`

    > section {
        display: flex;
        flex-direction: column;

        margin: 7rem auto 1rem auto;
        width: 34rem;
        height: auto;   
        padding: 1rem 1.5rem;
        background-color: #f5f5f5;
        border-radius: .5rem;
        box-shadow:  0 1px 3px rgba(0,0,0,0.2);

        > ul {
            margin-top: 1rem;

            > legend {
                font-size: 1.1rem;
                font-weight: bold;
                text-align: start;
            }
        }
    }
`;

export const Search = styled.input`
    width: 25rem;
    max-width: 90%;
    background-color: #fff;
    padding: .6rem 1rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    border: 2px solid #fff;
    border-radius: .5rem;
    transition: all .5s  ease-in-out;
    outline: none;

    &:focus {
        border-color: #00f;
    }
`;