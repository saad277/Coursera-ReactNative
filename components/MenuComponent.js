import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import { DISHES } from '../shared/dishes'


import { connect } from 'react-redux'

import { baseUrl } from '../shared/baseUrl'


import { Loading } from './LoadingComponent'

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES
        }
    }

    renderMenuItem = ({ item, index }) => {

        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => this.props.navigation.navigate("DishDetail", { dishId: item.id })}
                leftAvatar={{ uri: baseUrl + item.image }}
            />
        );
    };


    renderMenu = () => {


        return (<FlatList
            data={this.props.dishes.dishes}
            renderItem={this.renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />)

    }

    render() {



        return this.props.dishes.isLoading ? <Loading /> : this.renderMenu()



    }
}



const mapStateToProps = (state) => {


    return {

        dishes: state.dishes
    }

}

export default connect(mapStateToProps)(Menu);