import React, { createContext, useState } from "react";
import { api } from "../services/api";

const baseUrl = "https://swapi.dev/api/";

interface IPerson {
  name: string;
}

interface IPeopleContext {
  getPeople: () => Promise<void>;
  person: IPerson[] | null;
}

interface IPeopleProviderProps {
  children: React.ReactNode;
}

export const PeopleContext = createContext({} as IPeopleContext);

export const PeopleProvider = ({ children }: IPeopleProviderProps) => {
  const [person, setPerson] = useState(null);

  async function getPeople() {
    const { data } = await api.get(`/people`);
    console.log(data);

    const formatted = data.results.map((item: IPerson) => {
      return {
        name: item.name,
      };
    });
    setPerson(formatted);
  }

  return (
    <PeopleContext.Provider value={{ getPeople, person }}>
      {children}
    </PeopleContext.Provider>
  );
};
