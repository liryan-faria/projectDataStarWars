import React from "react"
import { Wrapper } from "./style"
import { SpeciesProvider } from "../../../../src/context/speciesContext"
import { Componente } from "./componente"

export const Species = () => {
    return (
        <Wrapper>
            <SpeciesProvider>
                <Componente />
            </SpeciesProvider>
        </Wrapper>
    )
}