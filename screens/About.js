import React from 'react';
import {View,Text,FlatList,TouchableOpacity,Button} from 'react-native';
import {global} from '../styles/global';
import { useSelector, useDispatch } from 'react-redux'


const About = () =>{
    const tasks = useSelector(state => state.tasks);
    const taskDone = tasks.filter(item => item.done === true);

    return(
        <View style={global.container}>
            <Text>Task that has done</Text>
            <FlatList
                data={taskDone}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={global.item}
                        onPress={() => navigation.navigate("Task", item)}>
                        <Text
                        onPress={()=>finishTask(item.id)}
                        style={item.done?null:{fontWeight:'bold'}}>{item.task}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default About;