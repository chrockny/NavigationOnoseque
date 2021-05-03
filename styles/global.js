import {StyleSheet} from 'react-native';

export const global = StyleSheet.create({
    container:{
        padding:30,
    },
    item:{
        padding:15,
        borderColor: 'black',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle: 'dashed',
        flexDirection:'row',
        justifyContent: 'space-between',
    }
})