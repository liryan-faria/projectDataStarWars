import React from "react";
import { Wrapper } from "./style";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlanetsContext } from "../../../context/planetsContext";

export const Planets = () => {
  const { planets, getPlanets } = useContext(PlanetsContext);

  return (
    <Wrapper>
      <button onClick={getPlanets}>Planets</button>
      {planets?.map((item) => (
        <p key={uuidv4()}>{item.name}</p>
      ))}
    </Wrapper>
  );
};
