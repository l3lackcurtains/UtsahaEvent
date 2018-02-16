import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Provider } from 'react-redux'
import Expo, { Notifications } from 'expo'
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import registerForNotifications from './services/push-notification';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import { store, AppWithNavigationState, persistor } from './redux';

class MainApp extends Component {
    state={
        isReady: false
    }
    async componentWillMount() {
        /* eslint-disable */
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        });
        /* eslint-enable */
        this.setState({ isReady: true })

        await registerForNotifications();
        Notifications.addListener((notification) => {
            const { data: { text }, origin } = notification;
            if (origin === 'received' && text) {
                Alert.alert('New Push Notification', text, [
                    { text: 'OK' },
                    { text: 'Cancel' }
                ]);
            }
        });
    }
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />
        }
        return (
            <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                    <StyleProvider style={getTheme(material)}>
                        <AppWithNavigationState />
                    </StyleProvider>
                </Provider>
            </PersistGate>
        )
    }
}

export default MainApp
