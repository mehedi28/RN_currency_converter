import React from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native'
import styles from './styles';

const TextInputField = (props) => {

    const {text, placeHolder, onPress} = props;
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.touchField} onPress={onPress} >
                <Text>{text}</Text>
            </TouchableHighlight>
            <TextInput

                style={styles.inputFlied}
                {...props}
            />
        </View>
    );
};

export default TextInputField;
