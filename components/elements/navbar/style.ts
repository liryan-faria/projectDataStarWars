import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: var(--cor-logo-footer);
    padding: 5px;

    & > img {
       max-width: 250px;
       width: 100%;           
        
    }

    & > img:hover {
        cursor: pointer;
    }

`