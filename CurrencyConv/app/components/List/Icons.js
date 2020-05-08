import React from 'react';
import {View, Image} from 'react-native'
import styles from './styles';

const Icon = ({checkMark, visible}) => {
    const iconStyle = [styles.icon]

    if (visible){
        iconStyle.push(styles.iconVisible)
    }

    return (
        <View style={iconStyle}>
            {checkMark? <Image resizeMode='contain' source={require('./images/check.png')}/> : null}
        </View>
    )
};

export default Icon;
