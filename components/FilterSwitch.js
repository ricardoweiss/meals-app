import React from 'react';
import {View, StyleSheet, Switch, Platform} from 'react-native';
import TextBody from "./TextBody";
import Colors from "../constants/Colors";



const FilterSwitch = props => {

    return (
        <View style={styles.filterSwitchContainer}>
            <TextBody>{props.label}</TextBody>
            <Switch value={props.value} trackColor={{true: Colors.primary}} onValueChange={props.onChange} thumbColor={Platform.OS === 'android' ? Colors.secondary : ''} />
        </View>
    )
}


const styles = StyleSheet.create({
    filterSwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        maxWidth: 500,
        marginVertical: 15,
        justifyContent: 'space-between'
    }
})

export default FilterSwitch;