/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {color} from './src/static/color';
//Page Import
import Dashboard from './src/components/Dashboard';
import Settings from './src/components/Settings';
  import ServerConfiguration from './src/components/Settings/submenus/ServerConfiguration';
  import SensorThreshold from './src/components/Settings/submenus/SensorThreshold';
  //import ServerConfiguration from './src/components/Settings/submenus';
  //import ServerConfiguration from './src/components/Settings/submenus';

//import MainMenuTab from './src/components/MainMenuTab';
const AppStackNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{
        backgroundColor:color.skin,
      },
      headerTitleStyle:{
        color:color.bgSkin
      }
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{
        backgroundColor:color.skin,
      },
      headerTitleStyle:{
        color:color.bgSkin
      }
    }),
  },
  ServerConfiguration: {
    screen: ServerConfiguration,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{
        backgroundColor:color.skin,
      },
      headerTitleStyle:{
        color:color.bgSkin
      }
    }),
  },
  SensorThreshold: {
    screen: SensorThreshold,
    navigationOptions: ({ navigation }) => ({
      headerStyle:{
        backgroundColor:color.skin,
      },
      headerTitleStyle:{
        color:color.bgSkin
      }
    }),
  },
});

const ContainerApp = createAppContainer(AppStackNavigator);

const App: () => React$Node = () => {
  return (
    <>
      <ContainerApp uriPrefix={'http://oriskin.id/'} />
      <StatusBar  backgroundColor={color.skin} barStyle="dark-light" />
      
    </>
  );
};



export default App;
