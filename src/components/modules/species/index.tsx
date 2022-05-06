import React from 'react'
import { useContext } from 'react'
import { Wrapper } from './style'
import { SpeciesContext } from '../../../context/speciesContext'
import { v4 as uuidv4 } from "uuid"

export const Species = () => {
    const { species, getSpecies } = useContext(SpeciesContext)
    return (
        <Wrapper>
           <button onClick={() => {getSpecies()}}>Species</button>
            {species?.map((item: any) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    )
}