import React from 'react';
import {StyleSheet} from 'react-native';
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";




const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

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