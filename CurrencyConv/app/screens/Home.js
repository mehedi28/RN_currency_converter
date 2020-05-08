import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native'
import Container from '../components/Container/Container'
import Logo from '../components/Logo/Logo';
import TextInputField from '../components/TextInput/TextInputField';
import ClearButton from '../components/Button/ClearButton';
import Header from '../components/Header/Header'

const Home = () => {

    return (
        <Container>
            <Header/>
            <KeyboardAvoidingView behavior="padding">
                <Logo/>
                <TextInputField keyboardType='numeric' text="USD" placeHolder="Insert Text"/>
                <TextInputField text="GBD" placeHolder="Check Text"/>
                <ClearButton text="Reset Currency"/>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default Home;
