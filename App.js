import React, {Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import FormScreen from './FormScreen';
import InformationScreen from './InformationScreen';

const App = createStackNavigator({ 
    FormScreen: { screen: FormScreen }, 
    InformationScreen: { screen: InformationScreen }, 
  },
  {
    initialRouteName: 'FormScreen',
  }
);

export default createAppContainer(App);