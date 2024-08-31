import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/pokemosnServices";
import { useSelector , useDispatch,  } from "react-redux";
import { addToTeam , removeFromTeam } from "../features/team/teamSlice";

const PokemonDetailPage = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const dispatch = useDispatch()
  const team = useSelector(state => state.team.value)
  console.log(team)

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {
        const data = await fetchPokemonDetail(name);
        setPokemon(data);
      } catch (error) {
        console.error("Error en getpokemon detail", error);
      }
    }
    getPokemonDetail();
  }, [name])
  const isInTeam = team.some(pokemon => pokemon == name)
  const handleTonggleTeam =()=>{
    
      if(isInTeam){
        dispatch(removeFromTeam(name))

      }else{
        dispatch(addToTeam(name))
      }
  }


  if (!pokemon){
    return <div>Cargando</div>
  }

  return (
        <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <p>Altura:{pokemon.heigt} </p>
      <p>Peso: {pokemon.weight}</p>
      <button onClick={handleTonggleTeam}>place holder
          {isInTeam? "Remover del equipo ": "Agregar al equipo"}
      </button>
      {console.log(pokemon)}
        </>
  )
}

export default PokemonDetailPage;