import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const CategoryGridTile = ({title, color, id, onSelected}) => {
    return (
        <TouchableOpacity onPress={onSelected} style={{...styles.item, ...{backgroundColor: color}}}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryGridTile;