import React from 'react'
import { useContext } from 'react'
import { Wrapper } from './style'
import { StarshipsContext } from '../../../context/starshipsContext'
import { v4 as uuidv4 } from "uuid"

export const Starships = () => {
    const { starships, getStarships } = useContext(StarshipsContext)
    return (
        <Wrapper>
           <button onClick={() => {getStarships()}}>Starships</button>
            {starships?.map((item: any) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    )
}