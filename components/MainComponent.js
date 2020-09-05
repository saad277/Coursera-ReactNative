import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailsComponent'
import Home from './HomeComponent'

import { View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'


const MenuNavigator = createStackNavigator({

    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
}, {
    initialRouteName: "Menu",
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DAB"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            color: "#fff"
        }
    }
})

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },

}, {
    
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DAB"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            color: "#fff"
        }
    }
})



const MainNavigator = createDrawerNavigator({

    Home: {
        screen: HomeNavigator
    },
    Menu: {
        screen: MenuNavigator
    }
},{
    drawerBackgroundColor:"#D1C4E9"
})


const AppContainer = createAppContainer(MainNavigator)







export default AppContainer;