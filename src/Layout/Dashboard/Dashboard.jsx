import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Harmony Academy | Dashboard</title>
      </Helmet>

      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <span>User Home</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <span>Reservations</span>
          </Menu.Item>
          <Menu.Item key="3" icon={<WalletOutlined />}>
            <span>Payment History</span>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
            <span>My Cart</span>
          </Menu.Item>
          <hr className='text-white'/>
          <div className="vr text-light"></div>
        </Menu>
      </Sider>
        <Outlet></Outlet>
        {/* <MyCart></MyCart> */}
    </Layout>
  );
};

export default Dashboard;
