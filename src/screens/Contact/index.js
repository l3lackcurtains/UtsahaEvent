import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Text, Card } from 'native-base'

import AppBar from '../../components/AppBar'

const styles = StyleSheet.create({
    orgName: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16
    },
    cardWrap: {
        margin: 8,
        height: 200,
    },
    cardStyle: {
        padding: 16
    }
})

class Contact extends Component {
    static navigationOptions = () => ({
        header: null
    })

    render() {
        const { navigation } = this.props
        return (
            <Container>
                <AppBar title="Contact" navigation={navigation} />
                <View style={styles.cardWrap}>
                    <Card style={styles.cardStyle}>
                        <Text style={styles.orgName}>Utsaha Technologies</Text>
                        <Text>Contact: +977 061-62690</Text>
                        <Text>Location: NewRoard, Pokhara</Text>
                    </Card>
                </View>
            </Container>
        )
    }
}

export default Contact
