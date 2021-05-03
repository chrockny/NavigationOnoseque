import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeStack,AboutStack} from './MyStack';
import MyTab from './MyTab';

const MyDrawer = () =>{
    const Drawer = createDrawerNavigator();

        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" 
                component={MyTab}/>
                <Drawer.Screen name="About" 
                component={MyTab}/>
            </Drawer.Navigator>
        )
}

export default MyDrawer
