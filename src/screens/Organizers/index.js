import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Container, Content, Card } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import AppBar from '../../components/AppBar'
import image1 from '../../assets/organizers/guruchela.jpg'
import image2 from '../../assets/organizers/nyc.jpg'
import image3 from '../../assets/organizers/rotaract.png'
import image4 from '../../assets/organizers/rotary.png'
import image5 from '../../assets/organizers/stepup.jpg'
import image6 from '../../assets/organizers/tracknepal.png'

const styles = StyleSheet.create({
    cardWrap: {
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: '90%',
        height: 80,
        marginHorizontal: 8,
        marginVertical: 24
    },
    cardStyle: {
        padding: 8,
    }
})

class Organizers extends Component {
    static navigationOptions = () => ({
        header: null
    })

    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <AppBar title="Organizers" navigation={navigation} />
                <Container>
                    <Content style={styles.cardWrap}>
                        <Card style={styles.cardStyle}>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image1}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image2}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Image
                                        source={image3}
                                        style={styles.imageStyle}
                                        resizeMode="contain"
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image4}
                                        style={styles.imageStyle}
                                        resizeMode="contain"
                                    />
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image5}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image6}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                        </Card>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default Organizers
