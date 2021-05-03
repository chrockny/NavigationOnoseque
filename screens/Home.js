import React, {useState} from 'react';
import {StyleSheet,TextInput, FlatList,TouchableOpacity,Button,View,Text} from 'react-native';
import {global} from '../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import {addTask} from '../store/taskAction';

const Home = ({navigation}) =>{
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)

    const [text,setText] = useState('');
    const changeHandler = (val) =>{
        setText(val);
    }
    const submitTask = (text) =>{
        dispatch(addTask(text))
    }

    return(
        <View style={global.container}>
            <TextInput
            style={styles.input}
            placeholder="Add new task"
            onChangeText={changeHandler}/>
            <Button title="add task"
            color="blue" onPress={()=>submitTask(text)}/>

            <FlatList
            data={tasks}
            renderItem={({item}) =>(
                <TouchableOpacity 
                style={global.item}
                onPress={()=>
                navigation.navigate("Task",item)}>
                <Text>{item.task}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        color:'blue',
        fontSize:40,
        backgroundColor:'red',
        padding:30,
        borderRadius:20,

    },
})


export default Home