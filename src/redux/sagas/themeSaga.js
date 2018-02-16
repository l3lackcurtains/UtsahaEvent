import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

import A from '../actions/index'
import config from '../../utils/config'

import {
    changeThemeSuccess,
    changeThemeErr,
    getDeviceThemeSuccess,
    getDeviceThemeErr
} from '../actions/themeAc'

/*
 ***************************************
 * Change Theme
 * *************************************
*/

function* changeTheme(action) {
    try {
        const data = action.query
        const link = `${config.apiUrl}/theme`
        const add = url => axios({
            method: 'post',
            url,
            data,
        }).then(res => res.data)

        const response = yield call(add, link)
        if (response.success) {
            yield put(changeThemeSuccess(response))
        } else {
            yield put(changeThemeErr(response))
        }
    } catch (error) {
        yield put(changeThemeErr(error.toString()))
    }
}

export function* changeThemeSaga() {
    yield takeEvery(A.REQ_CHANGE_THEME, changeTheme)
}

/*
 ***************************************
 * Get Device Theme
 * *************************************
*/

function* getDeviceTheme(action) {
    try {
        const { deviceToken } = action.query
        const link = `${config.apiUrl}/theme/${deviceToken}`
        const get = url => axios({
            method: 'get',
            url,
        }).then(res => res.data)

        const response = yield call(get, link)
        if (response.success) {
            yield put(getDeviceThemeSuccess(response))
        } else {
            yield put(getDeviceThemeErr(response))
        }
    } catch (error) {
        yield put(getDeviceThemeErr(error.toString()))
    }
}

export function* getDeviceThemeSaga() {
    yield takeEvery(A.REQ_DEVICE_THEME, getDeviceTheme)
}

