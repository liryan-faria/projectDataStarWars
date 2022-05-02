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


    & > button {
        border: none;
        cursor: pointer;
        
        width: 95px;
        height: 27px;
        border-radius: 3px;
        font-size: 0.9rem;
        font-family: 'Cormorant Garamond', serif;
        background: linear-gradient(0deg, rgba(100,100,100,1) 10%, rgba(200,200,200,1) 100%);
        color: var(--cor-letras);

        box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.3), 
        7px 7px 20px 0px rgba(0,0,0,.1), 
        4px 4px 5px 0px rgba(0,0,0,.1);

    }


    & > button:hover {
        opacity: .9;
    }


    & > p {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.1rem;
        color: var(--cor-letras);
        margin-top: 2px;
    }

`