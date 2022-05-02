import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background: var(--cor-fundo-pagina);
        color: var(--cor-letras);
        font-size: 1.3rem;
        font-family: 'Cormorant Garamond', serif;
        width: 100vw;
        height: 100vh;

    }

    .menuA {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        
    }

    .menuB {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    :root {
        --area-bloco-altura: 360px;
        --area-bloco-largura: 450px;
        --cor-fundo-pagina: rgb(90 90 90);
        --cor-logo-footer: rgb(65 65 65);
        --cor-bloco-escuro: rgb(50 50 50);
        --cor-bloco-claro: rgb(135 135 135);
        --cor-letras: rgb(230 230 230);
        --cor-botao: rgb(120 120 120);
    }


`

export default GlobalStyles