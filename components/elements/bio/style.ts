import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;

    background-color: var(--cor-fundo-pagina);
    color: var(--cor-letras);

    & > a {
        display: flex;
        text-decoration: none;
             
    }

    & > a > button {
        border: none;
        margin: 25px;
        cursor: pointer;
                
        width: 155px;
        height: 55px;
        border-radius: 5px;
        padding: 10px 25px;
        font-size: 1.3rem;
        font-family: 'Cormorant Garamond', serif;
        background: var(--cor-bloco-claro);
        background: linear-gradient(0deg, rgba(135,135,135,1) 10%, rgba(230,230,230,1) 100%);
        color: var(--cor-letras);
        outline: none;
        overflow: hidden;

        box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.3), 
        7px 7px 20px 0px rgba(0,0,0,.1), 
        4px 4px 5px 0px rgba(0,0,0,.1);      
       
    }

    & > a > button:hover {
        text-decoration: none;
        color: rgb(248 248 255);
    }

    & > a > button::before {
        //position: absolute;
        content: ' ';
        display: inline-block;
        top: -50px;
        //left: 5px;
        width: 5px;
        height: 70%;
        background-color: rgb(248 248 255);
        animation: shiny-btn1 2.5s ease-in-out infinite;
    }

    & > a > button:hover {
        opacity: .7;
    }

    & > a > button:active {
        box-shadow: 4px 4px 6px 0 rgba(255,255,255,.3), -4px -4px 6px 0 rgba(116, 125, 136, .2), inset -4px -4px 6px 0 rgba(255,255,255,.2), inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
    }

    @keyframes shiny-btn1 {
        0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5;};
        80% { -webkit-transform: scale(0) rotate(45deg); opacity: 1;};
        81% { -webkit-tranform: scale(4) rotate(45deg); opacity: 1;};
        100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0;};

    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
        background-color: var(--cor-logo-footer);
        padding: 5px;
    }

    & > div > img {
        max-width: 250px;
        width: 100%; 
        filter: grayscale(90%);
        


    }


    
`