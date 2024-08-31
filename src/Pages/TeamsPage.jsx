
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromTeam } from '../features/team/teamSlice';




const TeamPage = () => {
  const team = useSelector((state) => state.team.value);
  const dispatch = useDispatch();

 
  
  
  

  const handleRemove = (name) => {
    dispatch(removeFromTeam(name));
  };

  if (team.length === 0) {
    return <p>No hay pokemones en tu equipo.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mi Equipo de Pokémon</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {team.map((pokemon) => (
          <li key={pokemon} style={{ marginBottom: '10px' }}>
            <img 
              src={pokemon.img} 
              alt={pokemon.name} 
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            <h1 style={{ marginRight: '10px' }}>{pokemon}</h1>
            <button onClick={() => handleRemove(pokemon)}>Remover</button>
            {console.log(pokemon.id)}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
