import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const User1 = () => {
return (
    <View style={{flex: 1, justifyContent: "center", alignContent: "centre"}}>
        <Text style={{ fontSize: 25, color: "red" }}>User1</Text>
        <Link href="/chat/user2" style={{ fontSize: 25, color: "blue"}}>Go to user2</Link>
    </View>
)
}

export default User1