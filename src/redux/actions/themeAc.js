import A from './index'

/*
 ***************************************
 * Theme Change Action
 * *************************************
*/
export const changeThemeReq = query => ({
    type: A.REQ_CHANGE_THEME,
    query,
})

export const changeThemeSuccess = data => ({
    type: A.REC_CHANGE_THEME,
    data,
})

export const changeThemeErr = data => ({
    type: A.REC_CHANGE_THEME_ERR,
    data,
})

export const changeThemeReset = () => ({
    type: A.RESET_CHANGE_THEME,
})

/*
 ***************************************
 * Get device theme Action
 * *************************************
*/
export const getDeviceThemeReq = query => ({
    type: A.REQ_DEVICE_THEME,
    query
})

export const getDeviceThemeSuccess = data => ({
    type: A.REC_DEVICE_THEME,
    data,
})

export const getDeviceThemeErr = data => ({
    type: A.REC_DEVICE_THEME_ERR,
    data,
})

export const getDeviceThemeReset = () => ({
    type: A.RESET_DEVICE_THEME,
})
