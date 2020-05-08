import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native'
import styles from './styles';

const ClearButton = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.wrapper}>
                <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ClearButton;
