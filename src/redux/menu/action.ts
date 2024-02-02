import * as types from '@/redux/constant'

export const updateCollapse = (isCollapse: boolean) => ({
    type: types.UPDATE_COLLAPSE,
    isCollapse
})

// export const getMenuListAction = () => async (dispatch: Dispatch<MenuProps>) => {
//     const data = await getMenuList()
//     dispatch({
//         type: types.SET_MENU_LIST,
//         menuList: (data as Menu.MenuOptions[]) ?? []
//     })
// }
