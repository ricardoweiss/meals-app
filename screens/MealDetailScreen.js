import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';


const MealDetailScreen = (props) => {
    const meal = props.navigation.getParam('meal')

    return (
        <View>
            <Image></Image>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MealDetailScreen;