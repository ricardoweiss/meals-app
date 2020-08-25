import React from 'react';
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CategoriesScreen from "./CategoriesScreen";

const FavoritesScreen = (props) => {
    const favorites = MEALS.filter((item) => item.id === 'm1' || item.id === 'm2')

    return (
        <MealList itens={favorites} navigation={props.navigation}/>
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