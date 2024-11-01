import { View, Text } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router'

const Model = () => {
    const ispresent = router.canGoBack();
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <Text>model screen</Text>
      {ispresent && <Link href="/">Go back</Link>}
    </View>
  )
}

export default Model;