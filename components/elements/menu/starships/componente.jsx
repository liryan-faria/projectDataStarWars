import { useContext } from "react";
import { StarshipsContext } from "../../../../src/context/starshipsContext"
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./style";


export function Componente() {
    const { person, getStarships } = useContext(StarshipsContext);

    return (
        <Wrapper>          
            <button onClick={getStarships}>Starships</button>
            {person?.map((item) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    );
}