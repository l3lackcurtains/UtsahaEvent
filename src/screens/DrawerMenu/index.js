import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
    Container,
    Text,
    List,
    ListItem,
    Body,
    Left,
    Icon
} from 'native-base'
import { MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons'
import leftImage from '../../assets/Icons/user.png'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    navHeader: {
        height: 250,
        backgroundColor: '#851620'
    },
    headerContent: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginBottom: 18,
        marginLeft: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerInfo: {
        marginLeft: 8,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
    },
    headerTime: {
        color: '#bdbdbd'
    },
    menus: {

    }
});

class DrawerMenu extends Component {
    state = {
        //
    }

    changeScreen = (screen) => {
        const { navigation, closeDrawer } = this.props
        navigation.navigate(screen)
        closeDrawer()
    }

    render() {
        return (
            <Container style={styles.wrapper}>
                <View style={styles.navHeader}>
                    <View style={styles.headerContent}>
                        <Image
                            style={{ width: 42, height: 42 }}
                            source={leftImage}
                        />
                        <View style={styles.headerInfo}>
                            <Text style={styles.headerTitle}>International Youth Submit</Text>
                            <Text style={styles.headerTime}>16th -20th February, 2018</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.menus}>
                    <List>
                        <ListItem icon first onPress={() => this.changeScreen('HomeScreen')}>
                            <Left>
                                <MaterialCommunityIcons name="home" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Home</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.changeScreen('Organizers')}>
                            <Left>
                                <Octicons name="organization" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Organizers</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.changeScreen('Partners')}>
                            <Left>
                                <FontAwesome name="handshake-o" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Our Partners</Text>
                            </Body>
                        </ListItem>
                        {
                            /*
                        <ListItem icon onPress={() => this.changeScreen('Supporters')}>
                            <Left>
                                <FontAwesome name="support" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Supporters</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.changeScreen('Contact')}>
                            <Left>
                                <MaterialIcons name="contacts" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Contact Us</Text>
                            </Body>
                        </ListItem>
                        */
                        }
                        <ListItem icon last onPress={() => this.changeScreen('About')}>
                            <Left>
                                <MaterialCommunityIcons name="heart-outline" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>About Us</Text>
                            </Body>
                        </ListItem>
                    </List>
                </View>
            </Container>
        )
    }
}

export default DrawerMenu
