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
        height: 30px;
        border-radius: 3px;
        font-size: 0.9rem;
        font-family: 'Cormorant Garamond', serif;
        background: linear-gradient(0deg, rgba(100,100,100,1) 10%, rgba(200,200,200,1) 100%);
        color: var(--cor-letras);
        outline: none;
        overflow: hidden;

        box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.3), 
        7px 7px 20px 0px rgba(0,0,0,.1), 
        4px 4px 5px 0px rgba(0,0,0,.1);

    }
    & > button:hover {
        text-decoration: none;
        color: rgb(248 248 255);
    }

    & > button::before {
        content: ' ';
        display: inline-block;
        width: 5px;
        height: 50%;
        background-color: rgb(248 248 255);
        animation: shiny-btn1 2s ease-in-out infinite;
    }

    & > button:hover {
        opacity: .7;
    }

    & > button:active {
        box-shadow: 3px 3px 6px 0 rgba(255,255,255,.3), -3px -3px 6px 0 rgba(116,125,136,.2), inset -4px -4px 6px 0 rgba(255,255,255,.2), inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
    }

    @keyframes shiny-btn1 {
        0% { -webkit-transform: scale(0) rotate(30deg); opacity: 0.5;};
        80% { -webkit-transform: scale(0) rotate(30deg); opacity: 1;};
        81% { -webkit-tranform: scale(4) rotate(30deg); opacity: 1;};
        100% { -webkit-transform: scale(50) rotate(30deg); opacity: 0;};

    }
    & > p {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.1rem;
        color: var(--cor-letras);
        margin-top: 2px;
    }


`