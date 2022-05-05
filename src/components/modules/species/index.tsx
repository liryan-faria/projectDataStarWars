import React from "react";
import { Wrapper } from "./style";
import { SpeciesProvider } from "../../../context/speciesContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { SpeciesContext } from "../../../context/speciesContext";

export const Species = () => {
  const { species, getSpecies } = useContext(SpeciesContext);

  return (
      <Wrapper>
        <button onClick={getSpecies}>Species</button>
        {species?.map((item: any) => (
          <p key={uuidv4()}>{item.name}</p>
        ))}
      </Wrapper>
  );
};
