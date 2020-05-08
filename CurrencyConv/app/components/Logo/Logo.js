import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, Keyboard, Animated} from 'react-native';
import styles from './style';

class Logo extends Component {

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow =()=>{
        console.log("keyboard did show")
    }

    _keyboardDidHide=()=>{
        console.log("keyboard did hide")
    }

    onKeyboardWillShow() {
        console.log('Keyboard is shown');
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.centerImage}
                    source={require('./images/background.png')}
                >
                    <Image
                        style={styles.Image}
                        source={require('./images/logo.png')}
                    />
                </ImageBackground>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;
