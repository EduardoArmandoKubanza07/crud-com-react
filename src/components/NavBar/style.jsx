import styled from "styled-components";

export const Container = styled.nav`

    ul {
        display: flex;
        align-items: center;
        list-style: none;

        li {
            margin-right: 1.5rem;

            &:last-child {
                margin-right: 0;
            }

            a {
                text-decoration: none;
                cursor: pointer;
                transition: all .5s ease-in-out ;
                color: #00f;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }
    }
`;