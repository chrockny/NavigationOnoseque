import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack,AboutStack} from './MyStack';

const MyTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
            component={HomeStack}/>
            <Tab.Screen name="Done"
            component={AboutStack}/>
        </Tab.Navigator>
    )
}

export default MyTab
