import React from 'react'
import { useContext } from 'react'
import { Wrapper } from './style'
import { PlanetsContext } from '../../../context/planetsContext'
import { v4 as uuidv4 } from "uuid"

export const Planets = () => {
    const { planets, getPlanets } = useContext(PlanetsContext)
    return (
        <Wrapper>
           <button onClick={() => {getPlanets()}}>Planets</button>
            {planets?.map((item: any) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    )
}