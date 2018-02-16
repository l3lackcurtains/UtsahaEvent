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
import { connect } from 'react-redux'
import { Constants } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { changeThemeReq, getDeviceThemeReq } from '../../redux/actions/themeAc'

import DrawerMenu from '../DrawerMenu'
import ThemeOne from '../ThemeOne'

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#bdbdbd',
        height: Constants.statusBarHeight,
    },
    tabHeader: {
        backgroundColor: '#f3f3f3',
        paddingVertical: 18,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bellIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#fff'
    }
});

class Home extends Component {
    static navigationOptions = () => ({
        header: null
    })

    state = {
        bell: 0,
    }

    componentDidMount = async () => {
        try {
            const deviceToken = await AsyncStorage.getItem('pushToken');
            const query = {
                deviceToken
            }
            this.props.dispatch(getDeviceThemeReq(query))
        } catch (e) {
            console.log(e)
        }
    }


    changeBell = async (bell) => {
        try {
            const deviceToken = await AsyncStorage.getItem('pushToken');
            this.setState({
                bell
            }, () => {
                const query = {
                    themeName: bell,
                    deviceToken
                }
                this.props.dispatch(changeThemeReq(query))
            })
        } catch (e) {
            console.log(e)
        }
    }

    removeBell = async () => {
        try {
            const deviceToken = await AsyncStorage.getItem('pushToken');
            this.setState({
                bell: 0
            }, () => {
                const query = {
                    themeName: 0,
                    deviceToken
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
    };

    openDrawer = () => {
        this.drawer._root.open()
    };
    /* eslint-enable */

    render() {
        const { bell } = this.state
        const { theme } = this.props
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
                    <Tabs initialPage={0} locked>
                        <Tab heading="Theme One">
                            <View style={styles.tabHeader}>
                                <Text>Theme 1</Text>
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
                            <ThemeOne />
                        </Tab>
                        <Tab heading="Theme Two">
                            <View style={styles.tabHeader}>
                                <Text>Theme 2</Text>
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
                            <Text>tab2</Text>
                        </Tab>
                        <Tab heading="Theme Three">
                            <View style={styles.tabHeader}>
                                <Text>Theme 3</Text>
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
                            <Text>tab3</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </Drawer>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.theme,
    deviceTheme: state.deviceTheme
})

export default connect(mapStateToProps)(Home)
