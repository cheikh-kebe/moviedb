import React, { useState, useEffect } from "react";
import { Content, Wrapper } from "./Searchbar.styles";

export const Searchbar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [state, setSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <input
          type="text"
          name="SearchMovie"
          placeholder="Recherche"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};
