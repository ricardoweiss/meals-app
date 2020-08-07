import React from 'react';
import {View, Text, StyleSheet, Button,} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";



const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

    return (
        <View>
            <Text>CategoryMealScreen</Text>
            <Button onPress={() => {
                props.navigation.navigate('MealDetail')
            }} title={'open recipe!'}/>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
    return {headerTitle: selectedCategory.title}
}
const styles = StyleSheet.create({

})

export default CategoryMealsScreen;