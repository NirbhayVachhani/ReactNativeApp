import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Userdetails = () => {
    const { id } = useLocalSearchParams();
  return (
    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            fontSize: 25,
        }}>Details of User{id}</Text>
    </View>
  )
}

export default Userdetails;