import React, { useEffect, useState } from 'react';
import { styles } from './AppStyle';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import getRandomPokemon from './mvc/gets';

export default function App() {
	const [pokemon, setPokemon] = useState([]);
	const [pokeImage, setPokeImage] = useState(['https://picsum.photos/200']);
	const [showName, setShowName] = useState('Tap the Pokemon to see its name!');

	useEffect(() => {
		getRandomPokemon();
	}, []);

	return (
		<View style={styles.main}>
			<Text>Pok-e-balz</Text>
			<Text style={styles.name}>{showName}!</Text>
			<TouchableOpacity
				onPress={() => {
					setShowName(`This is ${pokemon}`);
				}}
			>
				<Image style={styles.pokeImage} source={{ uri: `${pokeImage}` }} />
			</TouchableOpacity>

			<Text style={styles.name}>Tap the Pokeball to get a new Pokemon!</Text>
			<View style={{ height: '20%' }}>
				<TouchableOpacity style={styles.pokeball} onPress={getRandomPokemon}>
					<Image
						style={styles.pokeball}
						source={require('./img/pokeball.png')}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
