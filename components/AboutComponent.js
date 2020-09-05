import React, { Component, useState } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { Card, Header, ListItem, Avatar } from 'react-native-elements';

import { LEADERS } from '../shared/leaders.js'





const About = () => {

    const [leaders, setLeaders] = useState(LEADERS)


    return (

        <ScrollView>
            <Header

                centerComponent={{ text: 'About Us', style: { color: '#fff' } }}
            />
            <Card style={styles.container}>
                <Card.Title>Our History </Card.Title>
                <Card.Divider />
                <Text >Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                <Text></Text>
                <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
            </Card>

            <Card style={styles.container}>
                <Card.Title>Corporate Leadership </Card.Title>
                <Card.Divider />
                {leaders.map((x) => {

                    return (
                        <ListItem key={x.id} bottomDivider>
                            <Avatar rounded={true} source={require('./images/alberto.png')} />
                            <ListItem.Content>
                                <ListItem.Title>{x.name}</ListItem.Title>
                                <ListItem.Subtitle>{x.description}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )

                })}

            </Card>

        </ScrollView>
    )

}

const styles = StyleSheet.create({


    container: {
        marginTop: 20
    }

})


export default About;