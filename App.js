

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';


var createReactClass = require('create-react-class');


var apiKey = "778D9516-7110-45D9-94BE-33CCCE7B7A53";

var vrScenes = {
  'FlingVR': require('./js/fling_vr/MainScene'),
}

var arScenes = {
  'FlingAR': require('./js/fling_ar/MainScene'),
}



var showARScene =  false;


var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {
    <View>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#4F6D7A"
    />
    <Text>
      Welcome to Fling Vision
    </Text>
  </View> 
  
  if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['FlingAR'],
          }}
          apiKey={apiKey} />
        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['FlingVR'],
          }}
          apiKey={apiKey} />
      );

    } 
  }
}); 

module.exports = ViroCodeSamplesSceneNavigator;
