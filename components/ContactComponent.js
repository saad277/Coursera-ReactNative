import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card,Header } from 'react-native-elements';






const Contact = () => {


    return (
        <View>
            <Header
                
                centerComponent={{ style: { color: '#fff' } }}
               
            />

            <Card style={styles.container}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text >121, Clear Water Bay Road </Text>
                <Text >Clear Water Bay, Kowloon </Text>
                <Text >HONG KONG </Text>
                <Text >Tel: +852 1234 5678 </Text>
                <Text >Fax: +852 8765 4321 </Text>
                <Text >Email:confusion@food.net</Text>
            </Card>
        </View>
    )


}

const styles = StyleSheet.create({


    container: {
        marginTop: 20
    }

})

export default Contact;