import { useContext } from "react";
import { PlanetsContext } from "../../../../src/context/planetsContext"
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./style";


export function Componente() {
    const { person, getPlanets } = useContext(PlanetsContext);

    return (
        <Wrapper>          
            <button onClick={getPlanets}>Planets</button>
            {person?.map((item) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    );
}