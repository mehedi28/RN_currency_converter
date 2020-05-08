
import React, {Component} from 'react';
import Home from './app/screens/Home';
import CurrencyList from './app/screens/CurrencyList';

import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            /*<NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="CurrencyList" component={CurrencyList} />
                </Stack.Navigator>
            </NavigationContainer>*/
            <CurrencyList/>
        );
    }
}

export default App;
