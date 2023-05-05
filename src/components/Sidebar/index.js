import { Layout, Menu, Image } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import {
    DashboardOutlined,
    LaptopOutlined,
    SettingOutlined,
    UserAddOutlined,
    LogoutOutlined,
    MenuOutlined
} from '@ant-design/icons';

import styles from'./Sidebar.module.css';


const { Sider } = Layout;

export default function Sidebar() {
    const router = useRouter();
    const { pathname } = router;
    const [selectedKeys, setSelectedKeys] = useState([pathname]);

    const handleMenuSelect = () => {
        setSelectedKeys(pathname);
      };

    return (
    <>
        <Sider width={300} className={`site-layout-background ${styles.sidebar}`}>
        <div className={styles.image}>   
            <Image width={200} src="/logo.png" preview={false}  />
        </div>
        <Menu
            mode="inline"
            onSelect={handleMenuSelect}
            selectedKeys={selectedKeys}
            style={{ height: '100%', borderRight: 0, backgroundColor: 'green' }}
        >
            <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                <a href="/dashboard">Dashboard</a>
            </Menu.Item>
            <Menu.Item key="/attendance" icon={<MenuOutlined />}>
                <a href="/attendance">Attendance</a>
            </Menu.Item>
            <Menu.Item key="/heart-rate" icon={<MenuOutlined />}>
                <a href="/heart-rate">Heart Rate</a>
            </Menu.Item>
            <Menu.Item key="/body-temperature" icon={<MenuOutlined />} title="Human Temperature">Human Temperature</Menu.Item>
            <Menu.Item key="/device" icon={<LaptopOutlined />} title="Device">Device</Menu.Item>
            <Menu.SubMenu
                key="6"
                icon={<SettingOutlined />}
                title="Settings"
            >
                <Menu.Item icon={<UserAddOutlined />} key="/register">Register</Menu.Item>
                <Menu.Item icon={<LogoutOutlined />}  key="/">                
                    <a href="/">Logout</a>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
        </Sider>
    </>
    );
};
