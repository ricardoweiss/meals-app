import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextBody from "./TextBody";

const Ingredient = (props) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.pointer}/>
            <TextBody style={styles.ingredient}>{props.ingredient}</TextBody>
        </View>

    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginLeft: 10
    },

    pointer: {
        height: 10,
        width: 10,
        backgroundColor: 'black',
        borderRadius: 10
    },

    ingredient: {
        fontSize: 16,
        margin: 10
    }
})

export default Ingredient;