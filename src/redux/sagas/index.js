import { all } from 'redux-saga/effects'

import {
    changeThemeSaga,
    getDeviceThemeSaga,
} from './themeSaga'

// Yield all sagas
export default function* rootSagas() {
    yield all([
        changeThemeSaga(),
        getDeviceThemeSaga(),
    ])
}
