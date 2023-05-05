import React from 'react';
import { Layout } from 'antd'

import HeartRate from '@/components/HeartRate';
import Sidebar from '@/components/Sidebar';

const { Content } = Layout;
export default function HeartRatePage() {
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
                    <HeartRate/>
                </Content>
        </Layout>
        </Layout>
    )
};
