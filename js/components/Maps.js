import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { StatusBar,   View } from 'react-native';
import { ListItem, Header } from 'react-native-elements'



class Maps extends Component { 
    render() {
        return (
            <View>
         <Header centerComponent={{ text: 'Map', style: { color: '#fff' } }}/>
           <Text>Map will come here</Text>
          </View>
        );
    }
}

export {Maps};