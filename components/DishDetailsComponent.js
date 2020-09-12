import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { FlatList } from 'react-native-gesture-handler';

import { connect } from 'react-redux'

import { baseUrl } from '../shared/baseUrl'

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? "heart" : "heart-o"}
                    type="font-awesome"
                    color={"#f50"}
                    onPress={() => props.favorite ? console.log("Already Favorite") : props.onPress()}
                />
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}


const RenderComments = (props) => {

    const comments = props.comments

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                <Text style={{ fontSize: 12 }}>{"-- " + item.author + " , " + item.date}</Text>
            </View>
        )

    }


    return (
        <Card title="Comments">

            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>


    )

}

class Dishdetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            favorites: []
        }
    }

    static navigationOptions = {
        title: "Dish Details"
    }

    markFavorite = (dishId) => {

        this.setState({

            favorites: this.state.favorites.concat(dishId)
        })

    }

    render() {

        const dishId = this.props.navigation.getParam("dishId", "")

        let comment = this.state.comments.filter((comment) => {

            return comment.dishId
        })

        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes[+dishId]}
                    favorite={this.state.favorites.some((el) => el == dishId)}
                    onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.props.comments} />
            </ScrollView>

        );
    }

}


const mapStateToProps = (state) => {

    return {

        dishes: state.dishes.dishes,
        comments: state.comments.comments
    }


}

export default connect(mapStateToProps)(Dishdetail);