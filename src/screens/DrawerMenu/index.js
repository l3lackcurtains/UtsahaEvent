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
import { MaterialCommunityIcons, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons'
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
        marginLeft: 24,
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
    render() {
        const { navigation } = this.props
        return (
            <Container style={styles.wrapper}>
                <View style={styles.navHeader}>
                    <View style={styles.headerContent}>
                        <Image
                            style={{ width: 50, height: 50 }}
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
                        <ListItem icon first onPress={() => navigation.navigate('HomeScreen')}>
                            <Left>
                                <MaterialCommunityIcons name="home" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Home</Text>
                            </Body>
                        </ListItem>
                        {
                            /*
                        <ListItem icon onPress={() => navigation.navigate('Organizers')}>
                            <Left>
                                <Octicons name="organization" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Organizers</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => navigation.navigate('Partners')}>
                            <Left>
                                <FontAwesome name="handshake-o" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Our Partners</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => navigation.navigate('Supporters')}>
                            <Left>
                                <FontAwesome name="support" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Supporters</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => navigation.navigate('Contact')}>
                            <Left>
                                <MaterialIcons name="contacts" size={24} color="#787878" />
                            </Left>
                            <Body>
                                <Text>Contact Us</Text>
                            </Body>
                        </ListItem>
                        */
                        }
                        <ListItem icon last onPress={() => navigation.navigate('About')}>
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
