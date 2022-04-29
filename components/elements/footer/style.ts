import styled from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 33px;
    text-align: end;
    background-color: var(--cor-logo-footer);
    color: var(--cor-letras);
    padding-inline-end: 1.3em;
    font-size: 0.7em;

    & > a {
        text-decoration: none;
        color: var(--cor-letras);
        cursor: pointer;

    }

`