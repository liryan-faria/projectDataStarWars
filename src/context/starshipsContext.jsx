import axios from "axios";
import React, { createContext, useState } from "react";

const baseUrl = "https://swapi.dev/api/";

export const StarshipsContext = createContext([]);
export const StarshipsProvider = ({ children }) => {
    const [person, setPerson] = useState(null);

    async function getStarships() {
        const { data } = await axios.get(`${baseUrl}/starships`);
        const formatted = data.results.map((item) => {
            return {
                name: item.name
            };
        });
        setPerson(formatted);
    }
    return (
        <StarshipsContext.Provider value={{ getStarships, person }}>
            {children}
        </StarshipsContext.Provider>
    )
}