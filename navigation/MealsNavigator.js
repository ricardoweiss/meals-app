import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {createAppContainer} from "react-navigation";
import React from "react";

import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FilterScreen from "../screens/FiltersScreen";


const defaultOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white'
    }
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, defaultOptions)

const FavStackNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, defaultOptions)

const tabsConfiguration = {
    Meal: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.primary
        }, tabBarColor: Colors.primary
    },
    Favorites: {
        screen: FavStackNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.secondary
        }
    }
}

const MealsFavTabsNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabsConfiguration, {
    activeColor: Platform.OS === 'ios' ? Colors.secondary : 'white',
    shifting: true
}) : createBottomTabNavigator(tabsConfiguration, {
    tabBarOptions: {
        activeTintColor: Colors.primary
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, defaultOptions)

const MainNavigator = createDrawerNavigator({
    MealsAndFav: {
        screen: MealsFavTabsNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.secondary,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)

