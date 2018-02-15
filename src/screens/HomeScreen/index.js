import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Tab, Tabs, Drawer, Button, Header, Left, Body, Title, Icon, Text } from 'native-base';
import { Constants } from 'expo'

import DrawerMenu from '../DrawerMenu'
import SessionOne from '../SessionOne'

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#bdbdbd',
        height: Constants.statusBarHeight,
    },
});

class HomeScreen extends Component {
    static navigationOptions = () => ({
        header: null
    })


    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<DrawerMenu navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}
            >
                <View style={styles.statusBar} />
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={this.openDrawer}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <Container>
                    <Tabs initialPage={0}>
                        <Tab heading="Tab1">
                            <SessionOne />
                        </Tab>
                        <Tab heading="Tab2">
                            <Text>tab2</Text>
                        </Tab>
                        <Tab heading="Tab3">
                            <Text>tab3</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </Drawer>
        )
    }
}

export default HomeScreen
