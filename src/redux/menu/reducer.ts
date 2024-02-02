import {AnyAction} from 'redux'

import * as types from '@/redux/constant'
import {MenuState} from '@/redux/interface'

const menuState: MenuState = {
    isCollapse: false,
    menuList: []
}

// menu reducer
const menu = (state: MenuState = menuState, action: AnyAction) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case types.UPDATE_COLLAPSE:
            newState.isCollapse = action.isCollapse
            break
        default:
            return newState
    }
    return newState
}


export default menu
