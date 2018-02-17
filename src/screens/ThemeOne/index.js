import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import { Container, Content, Card, CardItem, Text } from 'native-base';

const styles = StyleSheet.create({
    listStyle: {
        margin: 8
    },
    sessionHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    sessionTitle: {
        fontSize: 18,
        color: '#333',
        marginLeft: 36
    },
    countLogo: {
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: 42,
        fontWeight: '600',
        color: '#851620'
    },
    timeArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -24,
    },
    speakersArea: {
        marginTop: -24,
    },
    meta: {
        marginRight: 8,
        marginVertical: 8
    },
    metadata: {
        fontWeight: '500',
        color: '#555'
    }
})

class ThemeOne extends Component {
    state = {

    }

    render() {
        const { header, session } = this.props
        const sessions = [];
        Object.keys(session).map((key, index) => {
            sessions.push({
                index: index + 1,
                key,
                ...session[key]
            })
        });
        return (
            <Container>
                <Content>
                    {header}
                    <FlatList
                        style={styles.listStyle}
                        data={sessions}
                        renderItem={({ item }) => (
                            <Card>
                                <CardItem header>
                                    <View style={styles.sessionHeader}>
                                        <Text
                                            style={styles.countLogo}
                                        >
                                            {item.index}
                                        </Text>
                                        <Text
                                            style={styles.sessionTitle}
                                        >
                                            {item.title}
                                        </Text>
                                    </View>
                                </CardItem>
                                <CardItem header>
                                    <View style={styles.timeArea}>
                                        <Text
                                            style={styles.meta}
                                        >
                                        Time:
                                        </Text>
                                        <Text
                                            style={styles.metadata}
                                        >
                                            {item.time}
                                        </Text>
                                    </View>
                                </CardItem>
                                <CardItem>
                                    <View style={styles.speakersArea}>
                                        <Text
                                            style={styles.meta}
                                        >
                                        Speakers:
                                        </Text>
                                        <Text
                                            style={styles.metadata}
                                        >
                                            {item.speakers}
                                        </Text>
                                    </View>
                                </CardItem>
                            </Card>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

export default ThemeOne

