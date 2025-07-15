import React from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import Dashboard from './pages/Dashboard/Dashboard';
import SupplierList from './pages/SupplierList/main';
import ReviewApprovals from './pages/ReviewApprovals/ReviewApprovals';
import Configurations from './pages/Configurations/Configurations';

const { Sider, Content } = Layout;

const App: React.FC = () => {
theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          bottom: 0,
        }}
      >
        <SidebarMenu />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
          <div
            style={{
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/suppliers" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/suppliers" element={<SupplierList />} />
              <Route path="/reviews" element={<ReviewApprovals />} />
              <Route path="/configurations" element={<Configurations />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
