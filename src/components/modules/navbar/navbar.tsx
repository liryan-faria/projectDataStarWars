import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link'


export const NavBar = () => {
    return (
        <Wrapper>
            <Link href="https://swapi.dev/">
                <img src={'./logo.png'} alt="Logotipo Star Wars" />
            </Link>
        </Wrapper>
    
    )
}