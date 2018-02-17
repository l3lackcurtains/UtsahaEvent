import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    Button,
    Header,
    Left,
    Body,
    Title,
    Icon,
} from 'native-base'
import { Constants } from 'expo'

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#580e14',
        height: Constants.statusBarHeight,
    },
})

const AppBar = ({ title, navigation }) => {
    return (
        <View>
            <View style={styles.statusBar} />
            <Header>
                <Left>
                    <Button transparent onPress={this.openDrawer}>
                        <Icon name="arrow-back" onPress={() => navigation.goBack()} />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
            </Header>
        </View>
    )
}

export default AppBar
