import React from 'react'
import { Wrapper } from './style'
import { PeopleProvider } from "../../../../src/context/peopleContext"
import { Componente } from "./componente"

export const People = () => {
    return (
        <Wrapper>
            <PeopleProvider>
                <Componente />
            </PeopleProvider>
        </Wrapper>
    )
}