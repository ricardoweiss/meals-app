import {View, StyleSheet } from "react-native";
import TextBody from "./TextBody";
import React from "react";

const Characteristics = ({meal}) => {
    const { complexity, affordability, isGlutenFree, isVegan, duration, isVegetarian} = meal
    return (
        <View style={styles.informationContainer}>
            <View>
                <TextBody style={styles.information}>{complexity.toUpperCase()}</TextBody>
                <TextBody style={styles.information}>{affordability.toUpperCase()}</TextBody>
            </View>
            <View>
                <TextBody style={styles.information}>Gluten Free: {isGlutenFree ? 'Yes' : 'No'}</TextBody>
                <TextBody style={styles.information}>Duration: {duration.toString()}m</TextBody>
            </View>
            <View>
                <TextBody style={styles.information}>Vegan: {isVegan ? 'Yes' : 'No'}</TextBody>
                <TextBody style={styles.information}>Vegetarian: {isVegetarian ? 'Yes' : 'No'}</TextBody>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    informationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 10,
        backgroundColor: 'orange',
        height: 100
    },

    information: {
        fontSize: 12,
        marginVertical: 10
    }
})

export default Characteristics;