import React from "react";
import { Wrapper } from "./style";

import { StarshipsProvider } from "../../../context/starshipsContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StarshipsContext } from "../../../context/starshipsContext";

export const Starships = () => {
  const { starships, getStarships } = useContext(StarshipsContext);

  return (
      <Wrapper>
        <button onClick={getStarships}>Starships</button>
        {starships?.map((item) => (
          <p key={uuidv4()}>{item.name}</p>
        ))}
      </Wrapper>
  );
};
