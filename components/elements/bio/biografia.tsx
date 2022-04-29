import React from "react"
import { Wrapper } from "./style"


export const Biografia = () => {
    
    return (
        <Wrapper>
            <div className='header'>
                <img src={"/logo.png"} alt="Logo"/>
            </div>
            <div>Título</div>
            <div>Texto descritivo</div>
            <a href='/'><button>Retorno</button></a>
        </Wrapper>
    )
}