import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import {
    Container,
    Tab,
    Tabs,
    Drawer,
    Button,
    Header,
    Left,
    Body,
    Title,
    Icon,
    Text,
} from 'native-base'
import axios from 'axios'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import { Constants } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import config from '../../utils/config'
import { changeThemeReq } from '../../redux/actions/themeAc'

import DrawerMenu from '../DrawerMenu'
import ThemeOne from '../ThemeOne'

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#580e14',
        height: Constants.statusBarHeight,
    },
    tabHeader: {
        backgroundColor: '#fff',
        paddingVertical: 18,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bellIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#fff'
    },
    themeTitle: {
        fontSize: 18,
        marginVertical: 8,
        fontWeight: '600'
    }
})

class Home extends Component {
    static navigationOptions = () => ({
        header: null
    })

    state = {
        bell: 0,
        deviceToken: ''
    }

    componentDidMount = async () => {
        try {
            const deviceToken = await AsyncStorage.getItem('pushToken')
            this.setState({
                deviceToken
            })
            await axios.get(`${config.apiUrl}/theme/${deviceToken}`).then((res) => {
                this.setState({
                    bell: parseInt(res.data.data.themeName, 10) || 0
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    changeBell = async (bell) => {
        try {
            this.setState({
                bell
            }, async () => {
                const query = {
                    themeName: bell,
                    deviceToken: this.state.deviceToken
                }
                this.props.dispatch(changeThemeReq(query))
            })
        } catch (e) {
            console.log(e)
        }
    }

    removeBell = async () => {
        try {
            this.setState({
                bell: 0
            }, () => {
                const query = {
                    themeName: 0,
                    deviceToken: this.state.deviceToken
                }
                this.props.dispatch(changeThemeReq(query))
            })
        } catch (e) {
            console.log(e)
        }
    }

    /* eslint-disable */
    closeDrawer = () => {
        this.drawer._root.close()
    }

    openDrawer = () => {
        this.drawer._root.open()
    }
    /* eslint-enable */

    render() {
        const { bell } = this.state
        const {
            theme,
            navigation,
            themeOne,
            themeTwo,
            themeThree,
        } = this.props
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref }}
                content={<DrawerMenu navigation={navigation} />}
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
                        <Title>Utsaha Events</Title>
                    </Body>
                </Header>
                <Container>
                    <Tabs initialPage={0} locked>
                        <Tab heading="Theme One">
                            {
                                !isLoaded(themeOne) ? null :
                                    <ThemeOne
                                        header={
                                            <View style={styles.tabHeader}>
                                                <Text style={styles.themeTitle}>{themeOne.name}</Text>
                                                <Button light block rounded disabled={theme.isLoading} style={styles.bellIcon}>
                                                    {
                                                        bell === 1
                                                            ? <MaterialCommunityIcons
                                                                name="bell-ring"
                                                                size={25}
                                                                onPress={this.removeBell}
                                                            />
                                                            : <MaterialCommunityIcons
                                                                name="bell-ring-outline"
                                                                size={25}
                                                                onPress={() => this.changeBell(1)}
                                                            />
                                                    }
                                                </Button>
                                            </View>
                                        }
                                        session={themeOne.data}
                                    />
                            }
                        </Tab>
                        <Tab heading="Theme Two">
                            {
                                !isLoaded(themeTwo) ? null :
                                    <ThemeOne
                                        header={
                                            <View style={styles.tabHeader}>
                                                <Text style={styles.themeTitle}>{themeTwo.name}</Text>
                                                <Button light block rounded disabled={theme.isLoading} style={styles.bellIcon}>
                                                    {
                                                        bell === 2
                                                            ? <MaterialCommunityIcons
                                                                name="bell-ring"
                                                                size={25}
                                                                onPress={this.removeBell}
                                                            />
                                                            : <MaterialCommunityIcons
                                                                name="bell-ring-outline"
                                                                size={25}
                                                                onPress={() => this.changeBell(2)}
                                                            />
                                                    }
                                                </Button>
                                            </View>
                                        }
                                        session={themeTwo.data}
                                    />
                            }
                        </Tab>
                        <Tab heading="Theme Three">
                            {
                                !isLoaded(themeThree) ? null :
                                    <ThemeOne
                                        header={
                                            <View style={styles.tabHeader}>
                                                <Text style={styles.themeTitle}>{themeThree.name}</Text>
                                                <Button light block rounded disabled={theme.isLoading} style={styles.bellIcon}>
                                                    {
                                                        bell === 3
                                                            ? <MaterialCommunityIcons
                                                                name="bell-ring"
                                                                size={25}
                                                                onPress={this.removeBell}
                                                            />
                                                            : <MaterialCommunityIcons
                                                                name="bell-ring-outline"
                                                                size={25}
                                                                onPress={() => this.changeBell(3)}
                                                            />
                                                    }
                                                </Button>
                                            </View>
                                        }
                                        session={themeThree.data}
                                    />
                            }
                        </Tab>
                    </Tabs>
                </Container>
            </Drawer>
        )
    }
}

export default compose(
    firebaseConnect([
        'themeOne',
        'themeTwo',
        'themeThree'
    ]),
    connect(state => ({
        themeOne: state.firebase.data.themeOne,
        themeTwo: state.firebase.data.themeTwo,
        themeThree: state.firebase.data.themeThree,
        theme: state.theme,
    }))
)(Home)
