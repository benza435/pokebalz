const getRandomPokemon = () => {
	let random = Math.floor(Math.random() * 899);
	const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
	console.log(`### getting pokemon from ${url}`);
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			setPokemon(data.name);
			setPokeImage(data.sprites.other['official-artwork'].front_default),
				setShowName('Tap the Pokemon to see its name!');
			console.log(`showName: ${showName}`);
			return data.name;
		})
		.catch((error) => {
			console.error(error);
		});
};
