export const getRandomPokemon = () => {
    const random = Math.floor(Math.random()*899)
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`
    console.log(`getting pokemon from ${url}`) 
    return fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
          console.log(pokemon.name)
        return pokemon.name;
      })
      .catch((error) => {
        console.error(error);
      });
  };