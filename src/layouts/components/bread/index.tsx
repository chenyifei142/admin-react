import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "antd";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

interface BreadItem {
    path: string
    title: string
}

const Bread: React.FC = (props: any) => {
    const {menuList} = props
    // 当前路径
    const {pathname} = useLocation()
    // 初始化
    const [breads, setBreads] = useState<BreadItem[]>([])

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>sample</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default connect((state: any) => state.menu)(Bread)
