import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { StatusBar, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const list = [
    {
      place_name: 'Toong Sri Kan Airfeild',
      image_url:'./images/1.JPG',
      description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.'
    },
    {
        place_name: 'Toong Sri Kan Airfeild',
        image_url:'./images/1.JPG',
        description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.'
    },
    {
        place_name: 'Toong Sri Kan Airfeild',
        image_url:'./images/1.JPG',
        description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.'
      },
  ]

class Favorite_airfeilds extends Component {


    render() {
        return (
            <View>
           
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Header centerComponent={{ text: 'Suggested Places', style: { color: '#fff',fontSize:18 } }}/>
            <ScrollView>
            {
              list.map((item, i) => (
            
             <Card
               key={i}
               title={item.place_name}
               image={require('./images/1.JPG')}>
               <Text style={{marginBottom: 10}}>
               {item.description}
               </Text>
               <Button
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Inspect in AR' />
             </Card>
              ))
            }
             </ScrollView>
             </View>
        );
    }
}


export {Favorite_airfeilds};