import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const User2 = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignContent: "centre"}}>
      <Text style={{ fontSize: 25, color: "red" }}>User2</Text>
      <Link href ="/chat/user1" style={{ fontSize: 25, color: "blue"}}>Go to user1</Link>
    </View>
  )
}

export default User2