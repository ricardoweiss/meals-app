import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const CategoriesScreen = (props) => {

    const onSelectedHandler = (id) => {
        props.navigation.navigate('CategoryMeals', {categoryId: id})
    }

    const renderGridItem = (itemData) => {
        return <CategoryGridTile onSelected={() => onSelectedHandler(itemData.item.id)}
                                 title={itemData.item.title}
                                 color={itemData.item.color}/>

    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({})

export default CategoriesScreen;