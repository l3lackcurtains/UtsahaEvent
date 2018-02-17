import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import AppBar from '../../components/AppBar'

class Supporters extends Component {
    static navigationOptions = () => ({
        header: null
    })

    render() {
        const { navigation } = this.props
        return (
            <Container>
                <AppBar title="Supporters" navigation={navigation} />
                <Text>Supporters</Text>
            </Container>
        )
    }
}

export default Supporters
