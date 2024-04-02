import React, {useEffect, useState} from 'react';
import {Layout, theme} from 'antd';

const {Sider, Content} = Layout;
import './index.scss'
import LayoutHeader from "./components/header";
import LayoutSider from './components/sider'
import {connect} from "react-redux";
import {Outlet} from "react-router-dom";


const Layouts: React.FC = (props: any) => {
    const {isCollapse} = props
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        setCollapsed(isCollapse)
    }, [isCollapse])

    return (
        <Layout style={{height: '100%', width: '100%'}}>
            <LayoutHeader></LayoutHeader>
            <section className="flex ant-section">
                <Layout>
                    <Sider collapsed={collapsed}>
                        <LayoutSider/>
                    </Sider>
                    <Content>
                        <Outlet />
                        {/* <LayoutFooter /> */}
                    </Content>
                </Layout>
            </section>
        </Layout>
    );
};

export default connect((state: any) => state.menu)(Layouts)
