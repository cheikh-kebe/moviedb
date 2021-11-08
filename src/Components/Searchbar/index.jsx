import React, { useState } from "react";
import { Content, Wrapper } from "./Searchbar.styles";
import SearchIcon from "../../images/search-icon.svg";
import { useEffect } from "react/cjs/react.development";

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
        {/* <img src={SearchIcon} alt="search icon" /> */}
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
