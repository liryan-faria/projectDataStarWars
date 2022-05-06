import React from "react"
import { Wrapper } from "./style"


export const Biografia = () => {
    
    return (
        <Wrapper>
            <div className='header'>
                <img src={"/logo.png"} alt="Logo Star Wars"/>
            </div>
            <div className='caixaTextos'>
                <div className='primeiroTexto'>
                Star Wars é uma franquia de ficção criada por George Lucas 
                que narra a história da Aliança Rebelde contra o poder tirano
                do Império Galáctico.
                </div>
                <div className='segundoTexto'>
                Os primeiros filmes da franquia foram lançados entre os anos de 
                1977 e 1983, sendo o primeiro filme, de 1977 o "Star Wars", o
                segundo filme "The Empire Strikes Back" estreia no ano de 1980 
                a trilogia inicial fecha com o filme "Return of the Jedi" que 
                estreia no ano de 1983. Estes três primeiros filmes dão origem a 
                uma série de outros, assim como séries de televisão, musicais, 
                brinquedos e jogos, fazendo de Star Wars uma das maiores franquias
                de ficção do mundo e criando um universo que deu origem até a uma
                religião, sediada na Inglaterra.    
                </div>
            </div>
            <a href='/'><button>Retorno</button></a>
        </Wrapper>
    )
}