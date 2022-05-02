import React from 'react'
import { Wrapper } from './style'
import { PlanetsProvider } from "../../../../src/context/planetsContext"
import { Componente } from "./componente"

export const Planets = () => {
    return (
        <Wrapper>
            <PlanetsProvider>
                <Componente />
            </PlanetsProvider>
        </Wrapper>
    )
}