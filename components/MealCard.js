import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import TextBody from "./TextBody";
import Colors from "../constants/Colors";
import Characteristics from "./Characteristics";

const MealCard = ({meal, onSelect}) => {
    const deviceWidth = Dimensions.get('window').width
    const {title, imageUrl, isGlutenFree, duration, affordability, complexity} = meal;

    let infos = (
        <View style={{...styles.informationContainer, ...{justifyContent: 'space-between'}}}>
            <TextBody style={styles.information}>Gluten Free: {isGlutenFree ? 'Yes' : 'No'}</TextBody>
            <TextBody style={styles.information}>{affordability.toUpperCase()}</TextBody>
            <TextBody style={styles.information}>{complexity.toUpperCase()}</TextBody>
            <TextBody style={styles.information}>Duration: {duration.toString()}m</TextBody>
        </View>
            );

    if (deviceWidth < 500) {
        infos = <Characteristics meal={meal}/>

    }

    return (
        <View>
            <TouchableOpacity onPress={onSelect}>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' style={styles.image} source={{uri: imageUrl}}/>
                </View>
                <View style={styles.description}>
                    <View style={styles.titleContainer}>
                        <TextBody numOfLines={1} style={styles.title}>{title}</TextBody>
                    </View>
                    <View style={styles.informationContainer}>
                        {infos}
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    imageContainer: {
        height: 200,
        width: '100%'
    },

    image: {
        flex: 1
    },

    description: {
        height: 80,
        backgroundColor: 'orange',
        alignItems: 'center',
        padding: 10
    },

    titleContainer: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 18,
        color: Colors.primary,
        textAlign: 'center'
    },



})

export default MealCard;