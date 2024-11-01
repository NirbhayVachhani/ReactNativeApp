import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Button } from "react-native-web";
import { router } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="register" options={{ title: "Register",
      headerRight: () => (<Button title="open" onPress={() => router.push('model')} />)
       }} />
      <Stack.Screen name="model" 
      options={{ title: "Model",
         presentation: "modal",
         animation: "flip",
         headerLeft: () => (<Button title="close" onPress={() => router.back()} />)
       }} />
      <Stack.Screen name="(Drawer)" options={{ title: "About" }} />
    </Stack>
  );
};

export default Layout;