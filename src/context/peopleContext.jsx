import axios from "axios";
import React, { createContext, useState } from "react";

const baseUrl = "https://swapi.dev/api/";

export const PeopleContext = createContext([]);
export const PeopleProvider = ({ children }) => {
    const [person, setPerson] = useState(null);

    async function getPeople() {
        const { data } = await axios.get(`${baseUrl}/people`);
        const formatted = data.results.map((item) => {
            return {
                name: item.name
            };
        });
        setPerson(formatted);
    }
    return (
        <PeopleContext.Provider value={{ getPeople, person }}>
            {children}
        </PeopleContext.Provider>
    )
}