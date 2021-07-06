import React, {useEffect, useState} from "react";
import {styles} from './AppStyle'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import Name from './components/Name'

export default function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokeImage, setPokeImage] = useState(['https://picsum.photos/200'])
  const [showName, setShowName] = useState(false)

  const getRandomPokemon = () => {
    let random = Math.floor(Math.random()*899)
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`
    console.log(`### getting pokemon from ${url}`) 
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
       setPokemon(data.name)
       setPokeImage(data.sprites.other["official-artwork"].front_default),
       setShowName(false)
       console.log(`showName: ${showName}`)
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

      <Text style={styles.name}>{showName}</Text>
      {/* <Name props={pokemon, showName}/> */}
        <TouchableOpacity onPress={()=>{
            setShowName(pokemon)
            console.log(`show: ${showName}`)}}>
          <Image style={styles.pokeImage} source={{uri: `${pokeImage}`}} 
          />
        </TouchableOpacity>
        
        <View style={{height: '20%'}}>

          <TouchableOpacity style={styles.pokeball} onPress={getRandomPokemon}>
            <Image style={styles.pokeball} source={require('./img/pokeball.png')}/>
          </TouchableOpacity>

        </View>
    </View>
  );
}




