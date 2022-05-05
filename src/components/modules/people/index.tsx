import React, { useContext } from "react";
import { Wrapper } from "./style";
import { PeopleContext, PeopleProvider } from "../../../context/peopleContext";
import { v4 as uuidv4 } from "uuid";

export const People = () => {
  const { person, getPeople } = useContext(PeopleContext);

  return (
    <Wrapper>
      <button
        onClick={() => {
          console.log("hello");
          getPeople();
        }}
      >
        People
      </button>
      {person?.map((item) => (
        <p key={uuidv4()}>{item.name}</p>
      ))}
    </Wrapper>
  );
};
