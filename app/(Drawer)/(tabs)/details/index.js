import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: 25,
        }}>user details</Text>
        <Link href={{pathname:"/details/[id]", params: {id: "Gareb"}}}>Details of User-1</Link>
        <Link href={"/details/2"}>Details of User-2</Link>
        <Link href={"/details/3"}>Details of User-3</Link>
    </View>
  );
};

export default index;