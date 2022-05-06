import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface IPeople {
    name: string;
}

interface IPeopleContext {
    getPeople: () => Promise<void>;
    people: IPeople[] | null;
}

interface IPeopleProviderProps {
    children: React.ReactNode;
}

export const PeopleContext = createContext({} as IPeopleContext);
export const PeopleProvider = ({ children }: IPeopleProviderProps) => {
    const [people, setPeople] = useState(null);

    async function getPeople() {
        const { data } = await api.get(`/people`);
        const formatted = data.results.map((item: IPeople) => {
            return {
                name: item.name
            };
        });
        setPeople(formatted);
    }
    return (
        <PeopleContext.Provider value={{ getPeople, people }}>
            {children}
        </PeopleContext.Provider>
    )
}