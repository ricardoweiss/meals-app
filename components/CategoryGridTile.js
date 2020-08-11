import React from 'react';
import {TouchableNativeFeedback,Platform , View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import TextBody from "./TextBody";

const CategoryGridTile = ({title, color, onSelected}) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.touch}>
            <TouchableCmp style={styles.touch} onPress={onSelected} >
                <View style={{...styles.item, ...{backgroundColor: color}}}>
                    <View style={styles.titleContainer}>
                        <TextBody style={styles.title}>{title}</TextBody>
                    </View>
                </View>
            </TouchableCmp>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: Dimensions.get('window').height / 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },

    touch: {
        flex: 1
    },

    titleContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: 'relative',
        borderRadius: 10
    },

    title: {
        fontSize: 16
    }
})

export default CategoryGridTile;