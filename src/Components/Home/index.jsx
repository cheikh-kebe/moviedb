import React from "react";
import { useHomeFetch } from "../../Hooks/useHomeFetch";


export const Home = () => {
  const { state, loading, error, setSearchterm } = useHomeFetch();

  if (error) return <div>Oulala, il y a un problème</div>;
  console.log(state);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
