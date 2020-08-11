import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBody = ({ style, children, numOfLines}) => {
    if (numOfLines) {
        return <Text numberOfLines={numOfLines} style={{...styles.textBody, ...style}}>{children}</Text>
    }
    return <Text style={{...styles.textBody, ...style}}>{children}</Text>
}

const styles = StyleSheet.create({
    textBody: {
        fontFamily: 'open-sans'
    }
})

export default TextBody;