import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
});

class DrawerMenu extends Component {
    state = {
        //
    }
    render() {
        return (
            <Container style={styles.wrapper}>
                <Text>hello 1 </Text>
                <Text> Hello 2 </Text>
            </Container>
        )
    }
}

export default DrawerMenu
