import React from "react";
import {Text , StyleSheet,  Pressable} from 'react-native'


export function PasswordItem({data , removePassword}){
    return (

        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({

    container:{
        backgroundColor:'#000',
        padding:14,
        width:'100%',
        marginBottom:14,
        borderRadius:12,
    },

    text:{
        color:'#fff'
    }

})