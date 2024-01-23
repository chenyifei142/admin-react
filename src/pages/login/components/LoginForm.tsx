import React from 'react';
import {Button, Checkbox, Flex, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import '../index.scss'

const boxStyle: React.CSSProperties = {
    width: '100%',
    gap: '20px'
};

const onFinish = (values: any) => {
    console.log('Success:', values);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm: React.FC = () => (
    <Form
        name="basic"
        wrapperCol={{span: 24}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        size='large'
        autoComplete="off"
    >
        <Form.Item<FieldType> name="username" rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder="用户名：admin / user" prefix={<UserOutlined/>}/>
        </Form.Item>

        <Form.Item<FieldType> name="password" rules={[{required: true, message: '请输入密码'}]}>
            <Input.Password placeholder="密码：123456" prefix={<LockOutlined/>}/>
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{offset: 0, span: 16}}>
            <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 0, span: 24}}>
            <Flex style={boxStyle} justify='space-between' align='center'>
                <Button block htmlType="submit">重置</Button>
                <Button block type="primary" htmlType="submit">登录</Button>
            </Flex>
        </Form.Item>
    </Form>
);

export default LoginForm;
