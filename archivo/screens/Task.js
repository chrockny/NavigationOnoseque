import React from 'react'
import { View, Text, Button } from 'react-native'
import { global } from '../styles/global'

const Task = ({ navigation, route }) => {
    const goToHome = () => {
        // navigation.goBack()
        navigation.pop()
    }
    return (
        <View style={global.container}>
            <Text>{route.params.task}</Text>
            <Button title="Back to Home" onPress={goToHome} />
        </View>
    )
}

export default Task
