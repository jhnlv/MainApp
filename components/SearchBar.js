import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.searchCon}>
            <Ionicons name="search"  color={'gray'} size={25} style={{marginLeft: 1, marginRight: 5}}/>
            <TextInput 
                placeholder="Search Your Reminders..."
                style={styles.input}            
            />
            </View>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        marginTop: -20, 
        width:'100%'     
    },
    searchCon:{
        padding:10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius:10,
        alignItems: 'center',
    },
    input:{
        fontSize: 15,
        fontWeight:'bold',
        color: '#333',
        width:'90%'
    },
});