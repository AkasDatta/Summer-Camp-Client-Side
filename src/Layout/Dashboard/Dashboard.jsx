import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  HomeOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import { FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import { RiShoppingBag2Line } from 'react-icons/ri';

const { Sider } = Layout;

const Dashboard = () => {
  const [cart] = useCart();
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
        <div className="demo-logo-vertical mt-5" />
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

          <Menu.Item key="4" icon={<RiShoppingBag2Line />}
          >
              <Link as={Link}  className='text-decoration-none me-2' to="/dashboard/mycart" >
                My Cart
              </Link>
          <span
                className="badge"
                style={{
                  backgroundColor: '#0C4B65',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '9px',
                  textAlign: 'center',
                }}
              >
                +{cart?.length || 0}
              </span>
          </Menu.Item>
          <hr className='text-white'/>

          <Menu.Item key="5" icon={<HomeOutlined />}>
          <Link className='text-decoration-none' to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FaChalkboardTeacher />}>
          <Link className='text-decoration-none' to="/instructor">Instructors</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FaUsers/>}>
          <Link className='text-decoration-none' to="/classes">Classes</Link>
          </Menu.Item>
        </Menu>
      </Sider>
        <Outlet></Outlet>
    </Layout>
  );
};

export default Dashboard;
