import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailsComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Reservation from "./ReservationComponent"

import { View, Platform, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems, } from 'react-navigation-drawer'

import { Icon } from 'react-native-elements'


import { connect } from 'react-redux'

import { fetchComments, fetchDishes, fetchLeaders, fetchPromos } from '../Redux/ActionCreators'

const MenuNavigator = createStackNavigator({

    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => {

            return {
                headerLeft: <Icon name="menu" size={24} color="black" onPress={() => navigation.toggleDrawer()} />
            }
        }
    },
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
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />,
                headerStyle: {
                    backgroundColor: "#512DAB"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }
        }
    },

}, {


})


const AboutNavigator = createStackNavigator({


    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {

            return {

                headerLeft: <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />,
                headerStyle: {
                    backgroundColor: "#512DAB"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }
        }
    }

}


)

const customDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({

    Home: {
        screen: HomeNavigator,
        navigationOptions: () => {
            return {
                title: "Home",
                drawerLabel: "Home",
                drawerIcon: ({ tintColor }) => {

                    return <Icon name="home" type="font-awesome" size={22} color={tintColor} />

                }
            }
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: () => {
            return {
                title: "Menu",
                drawerLabel: "Menu",
                drawerIcon: ({ tintColor }) => {

                    return <Icon name="address-card" type="font-awesome" size={22} color={tintColor} />

                }
            }
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: () => {
            return {
                title: "Contact Us",
                drawerLabel: "Contact Us",
                drawerIcon: ({ tintColor }) => {

                    return <Icon name="address-card" type="font-awesome" size={22} color={tintColor} />

                }
            }
        }
    },
    Reservation: {
        screen: Reservation,
        navigationOptions: () => {
            return {
                title: "Reservation",
                drawerLabel: "Reservation",
                drawerIcon: ({ tintColor }) => {

                    return <Icon name="cutlery" type="font-awesome" size={22} color={tintColor} />

                }
            }
        }

    },
    About: {
        screen: AboutNavigator,
        navigationOptions: () => {
            return {
                title: "About",
                drawerLabel: "About",
                drawerIcon: ({ tintColor }) => {

                    return <Icon name="info-circle" type="font-awesome" size={22} color={tintColor} />

                }
            }
        }
    }
}, {
    drawerBackgroundColor: "white",
    contentComponent: customDrawerContentComponent
})



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "#512DA8",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row"
    },
    drawerHeaderText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60,
    }


})



const AppContainer = createAppContainer(MainNavigator)



class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }


    render() {

        return (
            <AppContainer />
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})


export default connect(null, mapDispatchToProps)(Main);