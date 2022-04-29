import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--area-bloco-largura);
    height: var(--area-bloco-altura);
    background: var(--cor-bloco-claro);
    margin: 5px;
    cursor: pointer;


    & > span {
        font-size: 3rem;
                   
    }
   


`