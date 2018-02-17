import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Card } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import AppBar from '../../components/AppBar'
import image1 from '../../assets/partners/bgs.png'
import image2 from '../../assets/partners/cnm.jpg'
import image3 from '../../assets/partners/csd.jpg'
import image4 from '../../assets/partners/grande.png'
import image5 from '../../assets/partners/heritage.jpg'
import image6 from '../../assets/partners/International Youth Society.png'
import image7 from '../../assets/partners/jcycn.jpg'
import image8 from '../../assets/partners/lifeskill.jpg'
import image9 from '../../assets/partners/nysc.png'
import image10 from '../../assets/partners/prottayshi.png'
import image11 from '../../assets/partners/psc.png'
import image12 from '../../assets/partners/sel.jpg'
import image13 from '../../assets/partners/tuf.jpg'
import image14 from '../../assets/partners/wsda.jpg'
import image15 from '../../assets/partners/yfwp.jpg'
import image16 from '../../assets/partners/ymh.jpg'

class Partners extends Component {
    static navigationOptions = () => ({
        header: null
    })

    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <AppBar title="Partners" navigation={navigation} />
                <Container>
                    <Content>
                        <Card>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image1}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image2}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image3}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image4}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image5}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image6}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image7}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image8}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image9}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image10}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image11}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image12}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image13}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image14}
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image15}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image16}
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

export default Partners
