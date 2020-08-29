import React from 'react';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";

import MealList from "../components/MealList";


const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)


    return (
        <MealList itens={favMeals} navigation={props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }

}

export default FavoritesScreen;