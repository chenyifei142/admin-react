import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme} from 'antd';

const {Header, Sider, Content} = Layout;
import './index.scss'
import LayoutHeader from "@/pages/home/components/header";

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout style={{height: '100%', width: '100%'}}>
            <LayoutHeader></LayoutHeader>
            <section className="flex ant-section">
                <Layout>
                    <Sider collapsed={collapsed}>

                    </Sider>
                    <Content>
                        {/* <LayoutFooter /> */}
                    </Content>
                </Layout>
            </section>
        </Layout>
    );
};

export default App;
