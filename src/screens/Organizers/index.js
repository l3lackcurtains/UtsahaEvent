import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Text, Content, Card } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import AppBar from '../../components/AppBar'
import image1 from '../../assets/organizers/guruchela.jpg'
import image2 from '../../assets/organizers/nyc.jpg'
import image3 from '../../assets/organizers/rotaract.png'
import image4 from '../../assets/organizers/rotary.png'
import image5 from '../../assets/organizers/stepup.jpg'
import image6 from '../../assets/organizers/tracknepal.png'

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
                    <Content>
                        <Card>
                            <Grid>
                                <Row>
                                    <Image
                                        source={image1}
                                        style={{ width: 250 }}
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image2}
                                        style={{ width: 250 }}
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image3}
                                        style={{ width: 250 }}
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image4}
                                        style={{ width: 250 }}
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image5}
                                        style={{ width: 250 }}
                                    />
                                </Row>
                                <Row>
                                    <Image
                                        source={image6}
                                        style={{ width: 250 }}
                                    />
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
