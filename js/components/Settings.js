import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { StatusBar } from 'react-native';

class Settings extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                <Text>Settings</Text>
            </SafeAreaView>
        );
    }
}

export {Settings};