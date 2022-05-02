import { useContext } from "react";
import { PeopleContext } from "../../../../src/context/peopleContext"
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./style";


export function Componente() {
    const { person, getPeople } = useContext(PeopleContext);

    return (
        <Wrapper>          
            <button onClick={getPeople}>People</button>
            {person?.map((item) => (
                <p key={uuidv4()}>{item.name}</p>
            ))}
        </Wrapper>
    );
}