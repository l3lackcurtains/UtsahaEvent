import A from '../actions/index'

const initState = {
    isReceived: false,
    isLoading: false,
    data: {},
    error: false,
}

/*
 ***************************************
 * Change theme reducer
 * *************************************
*/
const themeRe = (state = initState, action) => {
    switch (action.type) {
    case A.REQ_CHANGE_THEME:
        return {
            ...state,
            isReceived: false,
            isLoading: true,
        }
    case A.REC_CHANGE_THEME:
        return {
            ...state,
            isLoading: false,
            isReceived: true,
            data: action.data,
        }
    case A.REC_CHANGE_THEME_ERR:
        return {
            ...state,
            isLoading: false,
            error: true,
            data: action.data,
        }
    case A.RESET_CHANGE_THEME:
        return {
            isReceived: false,
            isLoading: false,
            data: {},
            error: false,
        }
    default:
        return state
    }
}

/*
 ***************************************
 * Get device theme reducer
 * *************************************
*/
const deviceThemeRe = (state = initState, action) => {
    switch (action.type) {
    case A.REQ_DEVICE_THEME:
        return {
            ...state,
            isReceived: false,
            isLoading: true,
        }
    case A.REC_DEVICE_THEME:
        return {
            ...state,
            isLoading: false,
            isReceived: true,
            data: action.data,
        }
    case A.REC_DEVICE_THEME_ERR:
        return {
            ...state,
            isLoading: false,
            error: true,
            data: action.data,
        }
    case A.RESET_DEVICE_THEME:
        return {
            isReceived: false,
            isLoading: false,
            data: {},
            error: false,
        }
    default:
        return state
    }
}


export default {
    theme: themeRe,
    deviceTheme: deviceThemeRe
}
