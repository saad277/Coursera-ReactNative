import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailsComponent'
import { DISHES } from '../shared/dishes';
import { View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


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


const AppContainer=createAppContainer(MenuNavigator)



    

  

export default AppContainer;