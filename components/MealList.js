import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealCard from "../components/MealCard";



const MealList = (props) => {


    const renderMeal = (itemData) => {
        return (
            <MealCard meal={itemData.item} onSelect={() => props.navigation.navigate('MealDetail', {meal: itemData.item})}/>
        )
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.itens} renderItem={renderMeal}/>
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ccc',
        flex: 1
    }
})

export default MealList;