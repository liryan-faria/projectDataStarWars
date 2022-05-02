import { useContext } from "react";
import { SpeciesContext } from "../../../../src/context/speciesContext"
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./style";


export function Componente() {
    const { person, getSpecies } = useContext(SpeciesContext);

    return (
        <Wrapper>          
            <button onClick={getSpecies}>Species</button>
            {person?.map((item) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    );
}