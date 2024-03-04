import React, { useState } from "react";
import {Login, Profile, Register, Form, ViewCamera} from '../screens/index.js'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();


const Home =()=>{

    return(
        <Tap.Navigator
        initialRouteName="Profile"
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === "Profile") {
                    iconName == 'accessibility'
                }else if (rn === "Form") {
                    iconName == 'form'
                }

                return <Ionicons name={iconName} size={size} color="black" />
                
            }
        })}>
            <Tap.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}/>
            <Tap.Screen
                name="Form"
                component={Form}
                options={{headerShown: false}}/>
        </Tap.Navigator>)
}

const MyStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Profile"
                    component={Login} 
                    options={{headerShown: false}} />
                <Stack.Screen 
                    name="Registro"
                    component={Register} 
                    options={{headerTitle: "Registro"}} />
                <Stack.Screen 
                    name="Home"
                    component={Home} 
                    options={{headerTitle: "Home"}} />
                <Stack.Screen
                    name = "Camera"
                    component={ViewCamera}
                    options={{headerTitle: "Camera"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default (MyStack);