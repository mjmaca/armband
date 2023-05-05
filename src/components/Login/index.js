import React from 'react';
import { useRouter } from 'next/router';
import { Button, Form, Input, Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from'./Login.module.css';

const Login = props => {
    const router = useRouter();

    const onFinish = (values) => {
        console.log('Success:', values);
        router.push('/dashboard');
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <>
            <Image width={200} src="/logo.png" preview={false} />        
            <Form
                name="normal_login"
                className={styles.form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit" className={`login-form-button ${styles.button}`}>
                    Log in
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

Login.propTypes = {};

export { Login };