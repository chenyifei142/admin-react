import React, {useState} from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';

import './index.less'
import {useNavigate} from "react-router-dom";

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

const items: MenuItem[] = [
    getItem('首页', '/home', <PieChartOutlined/>),
    getItem('员工名片管理', '/staffManage', <DesktopOutlined/>),
    getItem('名片模板管理', '/formWorkManage', <ContainerOutlined/>),

    getItem('名片权限管理', 'sub1', <MailOutlined/>, [
        getItem('名片权限管理', '/powerManage'),
        getItem('角色管理', '/roleManage')
    ]),
    getItem('名片数据分析', '/dataAnalysis', <ContainerOutlined/>),
    getItem('客户资源管理', '/organizeManage', <ContainerOutlined/>),
    getItem('组织架构管理', '/appletManage', <ContainerOutlined/>),

    getItem('小程序管理', 'sub2', <AppstoreOutlined/>, [
        getItem('隐私条款管理', '/appletManage/privacyClauseManage'),
        getItem('历史隐私条款管理', '/appletManage/historyManage'),
        getItem('登录介绍管理', '/appletManage/bannerManage', null),
    ]),
];

const App: React.FC = () => {
    // 点击当前菜单跳转页面
    const navigate = useNavigate()
    const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
        console.log(key,"1111111")
        // navigate(key)
    }

    return (
        <Menu
            defaultSelectedKeys={['/home']}
            mode="inline"
            onClick={clickMenu}
            items={items}
        />
    );
};

export default App;
