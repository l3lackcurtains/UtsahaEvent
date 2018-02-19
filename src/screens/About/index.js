import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Container, Text, Card, CardItem, Content } from 'native-base'
import { Grid, Col } from 'react-native-easy-grid'

import AppBar from '../../components/AppBar'
import utsahaLogo from '../../assets/Icons/logo.png'

const styles = StyleSheet.create({
    orgName: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16
    },
    cardWrap: {
        padding: 8,
    },
    cardStyle: {
        paddingHorizontal: 16,
        paddingVertical: 36,
    }
})

class About extends Component {
    static navigationOptions = () => ({
        header: null
    })

    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <AppBar title="About" navigation={navigation} />
                <Container>
                    <Content style={styles.cardWrap}>
                        <Card style={styles.cardStyle}>
                            <CardItem>
                                <Grid>
                                    <Col size={1}>
                                        <Image
                                            source={utsahaLogo}
                                            style={{
                                                width: '90%',
                                                height: 90,
                                            }}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col size={3}>
                                        <Text style={styles.orgName}>Utsaha Technologies</Text>
                                        <Text>Contact: +977 061-62690</Text>
                                        <Text>Location: NewRoard, Pokhara</Text>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default About

