import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import TextBody from "../components/TextBody";
import Ingredient from "../components/Ingredient";
import Step from "../components/Step";
import Characteristics from "../components/Characteristics";
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = (props) => {
    const meal = props.navigation.getParam('meal')

    return (
        <View style={styles.screen}>

            <ScrollView contentContainerStyle={styles.recipeContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: meal.imageUrl}}/>
                </View>
                <View style={styles.titleContainer}>
                    <TextBody numOfLines={1} style={styles.title}>{meal.title}</TextBody>
                </View>
                <View style={styles.titleContainer}>
                    <TextBody style={styles.sectionTitle}>Characteristics</TextBody>
                    <Characteristics meal={meal}/>
                    <TextBody style={styles.sectionTitle}>Ingredients:</TextBody>
                </View>
                <View style={styles.ingredientsContainer}>
                    {meal.ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ingredient}/>)}
                </View>
                <View style={styles.titleContainer}>
                    <TextBody style={styles.sectionTitle}>Steps</TextBody>
                </View>
                <View style={styles.stepsContainer}>
                    {meal.steps.map((step, index) => <Step key={index} index={index} step={step}/>)}
                </View>
            </ScrollView>

        </View>
    )
}

MealDetailScreen.navigationOptions = (navData) => {
    const meal = navData.navigation.getParam('meal')
    return {headerTitle: meal.title,
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={() => {
                    console.log('hitted')
                }}/>
            </HeaderButtons>)}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
    },

    imageContainer: {
        width: '100%',
        height: 200
    },
    image: {
        flex: 1
    },

    recipeContainer: {
        alignItems: 'flex-start'
    },

    titleContainer: {
        alignItems: 'center',
        width: '100%'
    },

    title: {
        fontSize: 20,
        marginVertical: 20
    },

    sectionTitle: {
        fontSize: 18,
        marginVertical: 20
    },

    ingredientsContainer: {
        width: '100%',
        marginLeft: 20,
        marginTop: 20
    },
    stepsContainer: {}
})

export default MealDetailScreen;