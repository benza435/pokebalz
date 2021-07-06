import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor:'green',

    },
    pokeball:{
      height: 100,
      width: 100,
      backgroundColor:"blue",
      borderRadius:50
    },
    bottom:{
      backgroundColor: 'white',
      height: '20%',
      width: '100%',
      alignItems: "center",
      justifyContent: 'center',
    },
    pokeImage:{
      height:300,
      width: 300,
    },
    name:{
      fontSize: 20,
      fontWeight: "bold",
      color: 'white'
    }
  
  })