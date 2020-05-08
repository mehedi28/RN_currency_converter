import React from 'react';
import {View, FlatList, Text} from 'react-native'
import currencies from '../data/currencies';

import ListItems from '../components/List/ListItems'
import Separator from '../components/List/Separator';

const CurrencyList = () => {
    return (
        <View style={{flex:1}}>
            <FlatList
                data={currencies}
                renderItem={({item})=>
                    <ListItems
                        text={item}
                        selected={item==='CAD'}
                        visible="false"
                    />}
                keyExtractor={item => item}
                ItemSeparatorComponent={Separator}
            />
        </View>

    );
};

export default CurrencyList;
