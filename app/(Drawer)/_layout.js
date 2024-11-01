import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Drawer} from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
    return ( 
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer
            screenOptions={{
                drawerPosition: "right",
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: "bold",
                },
                drawerStyle: {
                    backgroundColor: "lightgreen",
                },
            }}>
                <Drawer.Screen name="(tabs)" options={{title: "Inside"}}/>
                <Drawer.Screen name="inbox"/>
                <Drawer.Screen name="junk"/>
                <Drawer.Screen name="sent"/>
            </Drawer>
            </GestureHandlerRootView>
    )
}

export default _layout;