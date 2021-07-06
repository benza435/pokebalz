import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

const Name = ({props}) => {

    useEffect(() => {
        setShowName()
      }, []);


    return( 
    <View>

    <Text>Touch the pokemon to see its name</Text>
    <Text>{props.showName}</Text>
    {/* <Text>{pokemon}</Text> */}
    </View>
    )};

export default Name;