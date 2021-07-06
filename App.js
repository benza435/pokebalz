import React, {useEffect, useState} from "react";
import {styles} from './AppStyle'
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import Controls from "./components/Controls";
import { getRandomPokemon } from "./mvc/gets";

export default function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokeImage, setPokeImage] = useState(['https://picsum.photos/200'])

  const getRandomPokemon = () => {
    let random = Math.floor(Math.random()*899)
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`
    console.log(`getting pokemon from ${url}`) 
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
       setPokemon(data.name)
       setPokeImage(data.sprites.other["official-artwork"].front_default)
       console.log(`pokeImage: ${pokeImage} `)
       return data.name
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRandomPokemon()
  }, []);


  return (
    <View
      style={styles.main}
    >
      <Text>Pokebollocks</Text>

        <Text>{pokemon}</Text>
        <Image style={pokeImage} source={{uri: `${pokeImage}`}}/>
        <Image style={pokeImage} source={{uri: 'https://picsum.photos/200'}}/>
          <TouchableOpacity style={styles.pokeball} onPress={getRandomPokemon}>
            <Image style={styles.pokeball} source={require('./img/pokeball.png')}/>
          </TouchableOpacity>
    </View>
  );
}




