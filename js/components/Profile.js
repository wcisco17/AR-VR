import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { StatusBar,   View } from 'react-native';
import { ListItem, Header } from 'react-native-elements'

const list = [
    {
      title: 'Language',
      subtitle:'English',
      icon: 'language'
    },
    {
      title: 'Version',
      subtitle:'v0.02',
      icon: 'format-list-numbered'
    },
    {
        title: 'About',
        subtitle:'(Coming soon)',
        icon: 'info'
      },
  ]

class Profile extends Component { 
    render() {
        return (
            <View>
         <Header centerComponent={{ text: 'Settings', style: { color: '#fff' } }}/>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  subtitle={item.subtitle}
                  leftIcon={{ name: item.icon }}
                />
              ))
            }
          </View>
        );
    }
}

export {Profile};