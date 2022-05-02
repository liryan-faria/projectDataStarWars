import axios from "axios";
import React, { createContext, useState } from "react";

const baseUrl = "https://swapi.dev/api/";

export const PlanetsContext = createContext([]);
export const PlanetsProvider = ({ children }) => {
    const [person, setPerson] = useState(null);

    async function getPlanets() {
        const { data } = await axios.get(`${baseUrl}/planets`);
        const formatted = data.results.map((item) => {
            return {
                name: item.name
            };
        });
        setPerson(formatted);
    }
    return (
        <PlanetsContext.Provider value={{ getPlanets, person }}>
            {children}
        </PlanetsContext.Provider>
    )
}