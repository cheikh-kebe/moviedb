import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API";
//component
import { Button } from "../Button";
//styles
import { Wrapper } from "./login.styles";
//Context
import { Context } from "../../context";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // eslint-disable-next-line
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        username,
        password,
        requestToken,
      );
      console.log(sessionId.data);
      setUser({ sessionId: sessionId.data.session_id, username });
      navigate("/");

    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  return (
    <Wrapper>
      <label>Nom d'utilisateur</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
        />
      <label>Mot de passe</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
        />
      <Button text="Se connecter" callback={handleSubmit} />
        {error && <div className="error">Il y a une erreur!</div>}
    </Wrapper>
  );
};
