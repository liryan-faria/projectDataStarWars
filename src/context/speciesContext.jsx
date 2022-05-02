import axios from "axios";
import React, { createContext, useState } from "react";

const baseUrl = "https://swapi.dev/api/";

export const SpeciesContext = createContext([]);
export const SpeciesProvider = ({ children }) => {
    const [person, setPerson] = useState(null);

    async function getSpecies() {
        const { data } = await axios.get(`${baseUrl}/species`);
        const formatted = data.results.map((item) => {
            return {
                name: item.name
            };
        });
        setPerson(formatted);
    }
    return (
        <SpeciesContext.Provider value={{ getSpecies, person }}>
            {children}
        </SpeciesContext.Provider>
    )
}