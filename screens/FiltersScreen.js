import React, {useState, useEffect ,useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import TextBody from "../components/TextBody";
import FilterSwitch from "../components/FilterSwitch";


const FilterScreen = ({ navigation}) => {
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
            lactoseFree: isLactoseFree
        }
        console.log(appliedFilters)
    }, [isLactoseFree, isVegetarian, isVegan, isGlutenFree])

    useEffect(() => {
        navigation.setParams({ save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <TextBody style={styles.title}>Avaiable Filters:</TextBody>
            <FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan' value={isVegan} onChange={newValue => setIsVegan(newValue)}/>
            <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontSize: 22,
        marginVertical: 20
    }
})

export default FilterScreen;