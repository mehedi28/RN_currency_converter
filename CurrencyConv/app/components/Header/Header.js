import React from 'react';
import {View, TouchableHighlight, Text, Image} from 'react-native'
import styles from './styles';

const Styles = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
                <Image resizeMode="contain" source={require('./images/gear.png')}/>
            </TouchableHighlight>
        </View>
    );
};

export default Styles;
