import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import TextBody from "../components/TextBody";
import MealCard from "../components/MealCard";
import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";




const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')

    const renderMeal = (itemData) => {
        return (
                <MealCard meal={itemData.item} onSelect={() => props.navigation.navigate('MealDetailScreen', {meal: itemData.item})}/>
            )
    }

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View>
            <FlatList data={displayedMeals} renderItem={renderMeal}/>
            {/*<Button onPress={() => {
                props.navigation.navigate('MealDetail')
            }} title={'open recipe!'}/>*/}
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