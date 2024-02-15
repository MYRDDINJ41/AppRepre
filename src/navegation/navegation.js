import React from "react";
import {Login, Register} from '../screens/index.js'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" component={Login} 
                    options={{headerShown: false}} />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options={
                        {headerTitle: "Registro"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;