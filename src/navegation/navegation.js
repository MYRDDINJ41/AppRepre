import React from "react";
import {Login, Profile, Register, Form} from '../screens/index.js'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

const Home =()=>{
    return(
        <Tap.Navigator>
            <Tap.Screen
                name="Profile"
                component={Profile}
                options={{headerTitle: "Profile"}}/>
            <Tap.Screen
                name="Form"
                component={Form}
                options={{headerTitle: "Profile"}}/>
        </Tap.Navigator>)
}

const MyStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{headerShown: false}} />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options={{headerTitle: "Registro"}} />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{headerTitle: "Home"}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default (MyStack);