import React from 'react'
import { useContext } from 'react';
import { Wrapper } from './style'
import { PeopleContext } from "../../../context/peopleContext"
import { v4 as uuidv4 } from "uuid";

export const People = () => {
    const { people, getPeople } = useContext(PeopleContext);
    return (
        <Wrapper>
            <button onClick={() => { getPeople()}}>People</button>
            {people?.map((item: any) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    )
}