import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native'

import styles from './styles';
import Icon from './Icons';

const ListItems = ({text, onPress, selected=false, checkMark=false, visible=false}) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>

                {selected ? <Icon checkMark={checkMark} visible={visible}>:</Icon>:null}
            </View>
        </TouchableHighlight>
    );
};

export default ListItems;
