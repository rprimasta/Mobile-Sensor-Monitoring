import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    createStackNavigator , } from 'react-navigation-stack';
    
import {color} from '../static/color';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import Dashboard from './Dashboard';

const HomeStack = createStackNavigator({
    Home:Dashboard
  }, {
    card : 'modal',
    headerMode: 'screen'
  });

const TabNavigator =  createBottomTabNavigator(
{
    Home: {
    screen: HomeStack,
    navigationOptions:{
        title: 'Home',
        tabBarIcon: ({tintColor}) => (<Icon name="home" size={28} color={tintColor} />)
    }
    },
},
{
    swipeEnabled: true,
    lazy: false, 
    animationEnabled: true,
    tabBarOptions: {
    inactiveTintColor: color.skin,
    inactiveBackgroundColor: color.white,
    activeTintColor: color.skin,
    activeBackgroundColor :color.gray,
    showLabel: true,
    showIcon: true,
    tabStyle: {
        padding: 0, 
        margin:0, 
    },
    },
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#DFB09E',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#DFB09E',
    headerTitleStyle: {
        //fontWeight: 'bold',
        color: '#ffffff',
        //fontSize:17,
    }
    }
}
);
TabNavigator.navigationOptions = {
// Hide the header from AppNavigator stack
header: null,
};

export default TabNavigator;