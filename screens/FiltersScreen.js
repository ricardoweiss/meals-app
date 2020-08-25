import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";


const FilterScreen = () => {
    return (
        <View>
            <Text>FilterScreen</Text>
        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({

})

export default FilterScreen;