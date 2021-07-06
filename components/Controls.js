import * as React from "react";
import {styles} from '../AppStyle'
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { getRandomPokemon } from "../mvc/gets";


const Controls = (props) => {
    return (
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.pokeball} onPress={setData(getRandomPokemon)}>
            <Image style={styles.pokeball} source={require('../img/pokeball.png')}/>
            </TouchableOpacity>
        </View>
    );
};

export default Controls;