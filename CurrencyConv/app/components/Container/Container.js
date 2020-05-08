import React from 'react';
import {View, Text,TouchableWithoutFeedback, StyleSheet,  Keyboard} from 'react-native'

import styles from './styles';

const Container = ({children}) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            {children}
        </View>
        </TouchableWithoutFeedback>
    );
};

export default Container;

