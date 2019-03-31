

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
import {BaseNavigator} from "./js/navigation";

var createReactClass = require('create-react-class');


var apiKey = "778D9516-7110-45D9-94BE-33CCCE7B7A53";

var vrScenes = {
  'FlingVR': require('./js/components/fling_vr/MainScene'),
}

var arScenes = {
  'FlingAR': require('./js/components/fling_ar/MainScene'),
}



var showARScene =  false;


var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {
    return (
    <View style={{
      flex: 1,
      backgroundColor: '#293656'
  }}>
      <BaseNavigator/>
  </View>);

 /* if (showARScene) {
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

    } */
  }
}); 

module.exports = ViroCodeSamplesSceneNavigator;
