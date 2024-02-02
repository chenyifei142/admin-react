import React, {useState} from 'react';
import {Layout, theme} from 'antd';

const {Sider, Content} = Layout;
import './index.scss'
import LayoutHeader from "@/pages/home/components/header";
import LayoutSider from './components/sider'


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{height: '100%', width: '100%'}}>
            <LayoutHeader></LayoutHeader>
            <section className="flex ant-section">
                <Layout>
                    <Sider collapsed={collapsed}>
                        <LayoutSider />
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
