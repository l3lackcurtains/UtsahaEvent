import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Container, Content, Card } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import AppBar from '../../components/AppBar'
import image1 from '../../assets/partners/bgs.png'
import image2 from '../../assets/partners/cnm.jpg'
import image3 from '../../assets/partners/csd.jpg'
import image4 from '../../assets/partners/grande.png'
import image5 from '../../assets/partners/heritage.jpg'
import image6 from '../../assets/partners/iys.png'
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


const styles = StyleSheet.create({
    cardWrap: {
        padding: 8,
    },
    imageStyle: {
        width: '90%',
        height: 80,
        marginHorizontal: 8,
        marginVertical: 24
    },
    cardStyle: {
        padding: 8
    }
})

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
                                    <Col>
                                        <Image
                                            source={image3}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image4}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
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
                                <Row>
                                    <Col>
                                        <Image
                                            source={image7}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image8}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image9}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image10}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image11}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image12}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image13}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image14}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                    <Col>
                                        <Image
                                            source={image15}
                                            style={styles.imageStyle}
                                            resizeMode="contain"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image
                                            source={image16}
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

export default Partners
