import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useSelector} from "react-redux";

import MealList from "../components/MealList";
import TextBody from "../components/TextBody";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.emptyFavTextContainer}>
                <TextBody style={styles.text}>No favorites in the list, start adding favorites!</TextBody>
            </View>)
    }

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

const styles = StyleSheet.create({
    emptyFavTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 22,
        color: '#999',
        textAlign: 'center'
    }

})

export default FavoritesScreen;