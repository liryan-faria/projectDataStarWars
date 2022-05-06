import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface IPlanet {
    name: string;
}

interface IPlanetsContext {
    getPlanets: () => Promise<void>;
    planets: IPlanet[] | null;
}

interface IPlanetsProviderProps {
    children: React.ReactNode;
}

export const PlanetsContext = createContext({} as IPlanetsContext);
export const PlanetsProvider = ({ children }: IPlanetsProviderProps) => {
    const [planets, setPlanets] = useState(null);

    async function getPlanets() {
        const { data } = await api.get(`/planets`);
        const formatted = data.results.map((item: IPlanet) => {
            return {
                name: item.name
            };
        });
        setPlanets(formatted);
    }
    return (
        <PlanetsContext.Provider value={{ getPlanets, planets }}>
            {children}
        </PlanetsContext.Provider>
    )
}