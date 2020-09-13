import React, { Component } from 'react';
import { Text, View, ScrollView, Modal, StyleSheet, Button, FlatList, Alert } from 'react-native';
import { Card, Icon, AirbnbRating, Input } from 'react-native-elements';

import { postComments } from '../Redux/ActionCreators'

import { connect } from 'react-redux'

import { baseUrl } from '../shared/baseUrl'

import { postFavorite } from '../Redux/ActionCreators'

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
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? "heart" : "heart-o"}
                        type="font-awesome"
                        color={"#f50"}
                        onPress={() => props.favorite ? console.log("Already Favorite") : props.onPress()}
                    />
                    <Icon
                        raised
                        reverse
                        name={"pencil"}
                        type="font-awesome"
                        color={"green"}
                        onPress={() => props.toggleModal()}
                    />
                </View>

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
            //keyExtractor={item => item.id.toString()}
            />
        </Card>


    )

}

class Dishdetail extends Component {

    constructor(props) {
        super(props)

        this.state = {

            favorites: [],
            showModal: false,
            rating: 3,
            dishId: "",
            author: "",
            comment: "",
            date: ""

        }
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    resetForm() {
        this.setState({

            showModal: false
        });
    }


    static navigationOptions = {
        title: "Dish Details"
    }

    markFavorite = (dishId) => {

        this.props.postFavorite(dishId);

    }

    render() {

        const dishId = this.props.navigation.getParam("dishId", "")

        let comment = this.props.comments.filter((comment) => {

            return comment.dishId
        })

        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes[+dishId]}
                    favorite={this.props.favorites.some((el) => el == dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    toggleModal={() => {

                        this.toggleModal()

                        // console.log(this.props.dishes[dishId])

                        this.setState({

                            dishId: this.props.dishes[dishId].id,
                            date: new Date
                        })

                    }}
                />
                <RenderComments comments={this.props.comments} />


                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.toggleModal()}
                    onRequestClose={() => this.toggleModal()}>
                    <View style={styles.modal}>

                        <AirbnbRating
                            count={5}
                            reviews={["1", "2", "3", "4", "5"]}
                            defaultRating={this.state.rating}
                            size={25}
                            onFinishRating={(rating) => {
                                //Alert.alert(JSON.stringify(rating))
                                this.setState({ rating: rating })
                            }}
                        />

                        <View style={styles.form}>
                            <Input
                                placeholder='Author'
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='black'
                                        type="font-awesome"
                                    />
                                }
                                leftIconContainerStyle={{ marginRight: 26, }}
                                onChangeText={(text) => this.setState({ author: text })}
                            />
                            <Input
                                placeholder='Comment'
                                leftIcon={
                                    <Icon
                                        name='comment'
                                        size={24}
                                        color='black'
                                        type="font-awesome"
                                    />
                                }
                                leftIconContainerStyle={{ marginRight: 20, }}
                                onChangeText={(text) => this.setState({ comment: text })}
                            />
                        </View>


                        <Button
                            onPress={() => {

                                console.log(this.state)

                                let comment = {

                                    id: Math.random(),
                                    dishId: this.state.dishId,
                                    rating: this.state.rating,
                                    author: this.state.author,
                                    data: this.state.date,
                                    comment: this.state.comment,
                                }

                                if (this.state.comment || this.state.author) {

                                    this.props.postComments(comment)

                                    this.toggleModal()
                                }

                            }}
                            color="blue"
                            title="Submit"
                        />

                        <Button
                            style={{ marginTop: 20, }}
                            onPress={() => { this.toggleModal(); }}
                            color="grey"
                            title="Close"
                        />


                    </View>
                </Modal>


            </ScrollView>

        );
    }

}


const mapStateToProps = (state) => {

    return {

        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        favorites: state.favorites,
    }


}

const mapDispatchToProps = (dispatch) => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComments: (comment) => dispatch(postComments(comment))
})



const styles = StyleSheet.create({

    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    form: {

        marginTop: 50,

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);