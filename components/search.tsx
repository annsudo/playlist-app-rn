import React, { FC , useState } from "react";
import {View, TextInput, StyleSheet, Dimensions } from "react-native";
import  Ionicons  from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("screen");

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Search= (props: Props) => {
 return (
    <View  style={styles.container}>

       <View style={styles.holder}>
        <Ionicons style={styles.icon} name={props.icon} size={height/35} color={"rgb(205, 206, 207)"}/>                 
        <TextInput  style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={'rgb(105,110,131)' }       
          onChangeText={props.onChangeText} />
       </View>            
    </View>

    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        borderRadius: 180,
        paddingLeft: width/70,
        paddingTop: height/70,
        margin: 3,
        backgroundColor: 'rgb(48,56,87)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    holder: {
        flexDirection:"row"
    },
    icon: {
        height: height/30,
        width: width/15,
    },
    input: {
        color:"white",
      
    }
    
});


