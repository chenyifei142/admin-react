import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

import './index.less'
import {useLocation, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {Menu as MenuType} from '@/interface'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

// 动态渲染 Icon 图标
const addIcon = (name: string) => <i className={`iconfont ${name} !text-[16px] font-black`}/>

// 处理菜单的格式
const deepLoopFloat = (menuList: MenuType.MenuOptions[], newArr: MenuItem[] = [], path = '') => {
    menuList.forEach((item: MenuType.MenuOptions) => {
        // 是否存在子菜单，如果不存在子菜单，则调用 getItem 函数创建一个菜单项
        if (!item?.children?.length) {
            return newArr.push(
                // item.icon! 是 TypeScript 中的非空断言操作符 ! 的使用。
                getItem(item?.meta?.title, `${path}/${item.path}`, addIcon(item.icon!))
            )
        }
        /*
        * 如果当前菜单项有子菜单，那么递归调用 deepLoopFloat 函数处理子菜单，
        * 并将子菜单的处理结果作为当前菜单项的子菜单，并将当前菜单项推入 newArr 数组中。
        * */
        newArr.push(
            getItem(
                item?.meta?.title,
                `${path}/${item.path}`,
                addIcon(item.icon!),
                deepLoopFloat(item.children, [], `${path}/${item.path}`)
            )
        )
    })
    return newArr
}
// 根据传入的 keys 字符串获取展开的菜单项的 keys 数组
const getOpenKeys = (keys: string | undefined): string[] => {
    if (!keys) {
        return []
    }
    // 将 keys 字符串分割为一个路径数组 paths
    const paths = keys.split('/');
    // 移除了路径数组中的第一个元素（通常是空字符串）
    paths.shift();
    // 对 paths 数组进行处理，生成每个菜单项的 key，并存储在数组中返回
    return paths.map((item, index) => {
        let key = ''
        if (index == 0) {
            key = '/' + item
        } else {
            key = paths[index - 1] + '/' + item
        }
        paths[index] = key
        return key
    })
}


const Sider: React.FC = (props: any) => {
    const {menuList: menus} = props
    // 当前路径
    const {pathname} = useLocation()
    // 初始时根据当前路径设置默认展开的菜单项的 keys
    const [openKeys, setOpenKeys] = useState(getOpenKeys(pathname))
    // 默认路径
    const [defSelectKeys] = useState([pathname])
    // 初始化menuList
    const [menuList, setMenuList] = useState<MenuItem[]>([])

    // getMenuList 从 Redux 中获取菜单数据，并处理成符合 antd Menu 组件要求的格式
    const getMenuData = async () => {
        const tempMenus: MenuType.MenuOptions[] = []
        menus.map((item: MenuType.MenuOptions) => {
            if (item.element === 'Layout' && item.children) {
                tempMenus.push(...item.children)
            }
        })
        if (tempMenus.length) {
            setMenuList(deepLoopFloat(tempMenus))
        }
    }

    // 当菜单项展开或收起时触发的函数
    const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
        // 找到当前展开的菜单项中在 openKeys 中不存在的项
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        // 调用 getOpenKeys 函数获取更新后的 openKeys
        const openkey: string[] = getOpenKeys(latestOpenKey);
        // 设置更新后的 openKeys 状态
        setOpenKeys(openkey);
    };

    // 点击当前菜单跳转页面
    const navigate = useNavigate()
    const clickMenu: MenuProps['onClick'] = ({key}: { key: string }) => {
        navigate(key)
    }

    // 在组件挂载或 menus 发生变化时调用 getMenuData 函数
    useEffect(() => {
        getMenuData()
    }, [menus])
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={defSelectKeys}
            openKeys={openKeys}
            onClick={clickMenu}
            onOpenChange={onOpenChange}
            items={menuList}
        />
    );
};

const mapStateToProps = (state: any) => state.menu
export default connect(mapStateToProps)(Sider)

