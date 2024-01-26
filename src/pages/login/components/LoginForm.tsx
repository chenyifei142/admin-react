import React, {useEffect} from 'react';
import {Button, Checkbox, Flex, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import '../index.scss'
import {LoginApi} from "@/api/login";
import {useNavigate} from "react-router-dom";

const boxStyle: React.CSSProperties = {
    width: '100%',
    gap: '20px'
};


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm: React.FC = (props: any) => {

    const [form] = Form.useForm(); // 使用 Form 的 hook 获取 form 实例
    const navigate = useNavigate()

    useEffect(() => {
        // 清空 localStorage
        localStorage.removeItem('token');
    }, []);

    const onFinish = (values: any) => {
        LoginApi(values).then(res => {
            localStorage.setItem("token", res.token);
            navigate('/home')
        });
    };

    const onReset = () => {
        form.resetFields(); // 重置表单
    };

    return (
        <Form
            form={form} // 将 form 实例传递给 Form 组件
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
                    <Button block htmlType="submit" onClick={onReset}>重置</Button>
                    <Button block type="primary" htmlType="submit">登录</Button>
                </Flex>
            </Form.Item>
        </Form>
    )
};

export default LoginForm;
