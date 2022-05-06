import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface IStarship {
    name: string;
}

interface IStarshipsContext {
    getStarships: () => Promise<void>;
    starships: IStarship[] | null;
}

interface IStarshipsProviderProps {
    children: React.ReactNode;
}

export const StarshipsContext = createContext({} as IStarshipsContext);
export const StarshipsProvider = ({ children }: IStarshipsProviderProps) => {
    const [starships, setStarships] = useState(null);

    async function getStarships() {
        const { data } = await api.get(`/starships`);
        const formatted = data.results.map((item: IStarship) => {
            return {
                name: item.name
            };
        });
        setStarships(formatted);
    }
    return (
        <StarshipsContext.Provider value={{ getStarships, starships }}>
            {children}
        </StarshipsContext.Provider>
    )
}