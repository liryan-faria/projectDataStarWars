import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface ISpecie {
    name: string;
}

interface ISpeciesContext {
    getSpecies: () => Promise<void>;
    species: ISpecie[] | null;
}

interface ISpeciesProviderProps {
    children: React.ReactNode;
}

export const SpeciesContext = createContext({} as ISpeciesContext);
export const SpeciesProvider = ({ children }: ISpeciesProviderProps) => {
    const [species, setSpecies] = useState(null);

    async function getSpecies() {
        const { data } = await api.get(`/species`);
        const formatted = data.results.map((item: ISpecie) => {
            return {
                name: item.name
            };
        });
        setSpecies(formatted);
    }
    return (
        <SpeciesContext.Provider value={{ getSpecies, species }}>
            {children}
        </SpeciesContext.Provider>
    )
}