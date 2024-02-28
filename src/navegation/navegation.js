import React from "react";
import {Login, Profile, Register, Form} from '../screens/index.js'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

const Home =()=>{
    return(
        <Tap.Navigator
        initialRouteName={profile}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size}) => {
                let iconName;
                let rn = route.name;

                if (rn === profile) {
                    iconName == 'accessibility'
                }else if (rn === form) {
                    iconName = 'form'
                }

                return <Ionicons name={iconName} size={size} color="black" />
                
            }
        })}>
            <Tap.Screen
                name={profile}
                component={Profile}
                options={{headerShown: false}}/>
            <Tap.Screen
                name={form}
                component={Form}
                options={{headerShown: false}}/>
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