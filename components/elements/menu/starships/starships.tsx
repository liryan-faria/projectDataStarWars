import React from "react"
import { Wrapper } from "./style"
import { StarshipsProvider } from "../../../../src/context/starshipsContext"
import { Componente } from "./componente"


export const Starships = () => {
    return (
        <Wrapper>
            <StarshipsProvider>
                <Componente></Componente>
            </StarshipsProvider>
        </Wrapper>
    )
}