
import React, { Component } from 'react'

import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


import { connect } from 'react-redux'

import { baseUrl } from '../shared/baseUrl'

function RenderItem(props) {

    const item = props.item;

    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{ uri: baseUrl + item.image }}>
                <Text
                    style={{ margin: 10 }}>
                    {item.description}</Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}



class Home extends Component {


    static navigationOptions = {

        title: "Home"

    }

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {


        return (
            <ScrollView>
                <RenderItem item={this.props.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.props.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.props.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        )


    }

}


const mapStateToProps = (state) => {

    return {

        dishes: state.dishes.dishes,
        comments: state.dishes.dishes,
        promotions: state.promotions.promos,
        leaders: state.leaders.leaders
    }


}

export default connect(mapStateToProps)(Home);