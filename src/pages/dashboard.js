import React from 'react';
import { Layout } from 'antd'

import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';

const { Content } = Layout;
export default function DashboardPage() {
    return(
        <Layout style={{ height: '100vh' }}>
            <Sidebar />

            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Dashboard/>
                </Content>
        </Layout>
        </Layout>
    )
};
