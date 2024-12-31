import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../app/conponent/LoginScreen'
import RegisterScreen from '../app/conponent/RegisterScreen'
import ForgotPassword from '../app/conponent/ForgotPassword'
import HomeScreen from '../app/conponent/HomeScreen'
import ToDoDetail from '../app/conponent/ToDoDetail'
import ProfileScreen from '../app/conponent/ProfileScreen'
const Stack = createNativeStackNavigator()
const index = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Register' }}
            />
            <Stack.Screen
                name='Forgot'
                component={ForgotPassword}
                options={{ title: 'ForgotPassword' }}
            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }} />
            <Stack.Screen
                name='ToDoDetail'
                component={ToDoDetail}
                options={{ title: 'Detail' }} />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ title: "Profile" }} />
        </Stack.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})