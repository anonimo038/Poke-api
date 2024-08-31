

export const fetchPokemons = async ()=>{
    const url ="https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20";

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("error al obtener los datos")
        }
        const data = await response.json()
        return data.results

    }catch(error){
        console.log("error en la peticion de la pokeapi", error )

    }
}

export const fetchPokemonDetail = async (name)=>{
    try {
        const response = await  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        return data


    }catch(error){
        console.error("error en fecht detail ", error)
    }


}
