import {
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import React, { Component } from 'react';
import firebase from 'firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AppNavigator from './AppNavigator'

const firebaseConfig = {
    apiKey: 'AIzaSyDLeUhygvMuV9G50mGruOEJ3ZxqcktkedI',
    authDomain: 'utsahaevent-2f496.firebaseapp.com',
    databaseURL: 'https://utsahaevent-2f496.firebaseio.com',
    storageBucket: 'utsahaevent-2f496.appspot.com',
    projectId: 'utsahaevent-2f496',
    messagingSenderId: '238659759768'
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    events: 'events'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const persistConfig = {
    key: 'firebase',
    storage,
};

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer,
    firebase: persistReducer(persistConfig, firebaseReducer),
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    applyMiddleware(middleware)
)(createStore);

const addListener = createReduxBoundAddListener('root');

class App extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
      onBackPress = () => {
          const { dispatch, nav } = this.props;
          if (nav.index === 0) {
              return false;
          }
          dispatch(NavigationActions.back());
          return true;
      };

      render() {
          const { dispatch, nav } = this.props;
          const navigation = addNavigationHelpers({
              dispatch,
              state: nav,
              addListener,
          });

          return <AppNavigator navigation={navigation} />;
      }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const initialState2 = {};
const store = createStoreWithFirebase(appReducer, initialState2);
const persistor = persistStore(store);

export { store, AppWithNavigationState, persistor }
