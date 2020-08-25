import React from 'react';
import {StyleSheet} from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";




const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList itens={displayedMeals} navigation={props.navigation}/>
    )
}

CategoryMealsScreen.navigationOptions = (navData) => {
    const catId = navData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
    return {headerTitle: selectedCategory.title}
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#ccc',
        flex: 1
    }
})

export default CategoryMealsScreen;