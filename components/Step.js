import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextBody from "./TextBody";

const Step = (props) => {
    return (
        <TextBody style={styles.stepText}>{props.index + 1}. {props.step}</TextBody>
    )
}

const styles = StyleSheet.create({
    stepText: {
        margin: 20
    }
})

export default Step;