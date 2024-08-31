import React, { useEffect, useState } from "react";
import "../assets/Styles/pokemonList.css"
import { fetchPokemons } from "../services/pokemosnServices";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    getPokemons();
  }, []);
  return (
    <>
      <h2>Lista pokemones</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index} className="pokemon-list-item">
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      {console.log(pokemons)}
    </>
  );
};
export default PokemonList;
