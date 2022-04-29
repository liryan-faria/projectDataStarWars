import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Wrapper } from './style'


export const Footer = () => {
    
    return (
        <Wrapper>
            <a href="/bio/bio">
                <span>Desenvolvido com <AiOutlineHeart /> por Líryan Faria </span>
            </a>
        </Wrapper>
    )
}