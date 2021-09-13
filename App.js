import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { styles } from "./AppStyle";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeImage, setPokeImage] = useState(["https://picsum.photos/200"]);
  const [showName, setShowName] = useState("Tap the Pokemon to see its name!");

  const getRandomPokemon = () => {
    let random = Math.floor(Math.random() * 899);
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    console.log(`### getting pokemon from ${url}`);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.name);
        setPokeImage(data.sprites.other["official-artwork"].front_default),
          setShowName("Tap the Pokemon to see its name!");
        console.log(`showName: ${showName}`);
        return data.name;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <View style={{ height: "20%" }}>
        <TouchableOpacity style={styles.pokeball} onPress={getRandomPokemon}>
          <Image
            style={styles.pokeball}
            source={require("./img/pokeball.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
