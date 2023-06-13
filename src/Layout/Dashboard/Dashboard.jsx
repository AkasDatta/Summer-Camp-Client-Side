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
import { FaChalkboardTeacher, FaList, FaUsers } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { MdAddShoppingCart, MdLibraryBooks } from "react-icons/md";
import useAdmin from '../../hooks/useAdmin';

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;  
  const [isAdmin] = useAdmin();
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
        {
          isAdmin ? <>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link className='text-decoration-none' to="/dashboard/adminhome">Admin Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<MdAddShoppingCart />}>
                <Link className='text-decoration-none' to="/dashboard/additems">Add Items</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<FaList />}>
                <Link className='text-decoration-none' to="/dashboard/manageitems">Manage Items</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<MdLibraryBooks />}>
                <Link className='text-decoration-none' to="/dashboard/managebookings">Manage Bookings</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<FaUsers />}>
                <Link className='text-decoration-none' to="/dashboard/allusers">All Users</Link>
                </Menu.Item>
          </> : <>
             <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link className='text-decoration-none' to="/dashboard/home">User Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />}>
                <Link className='text-decoration-none' to="/dashboard/reservations">Reservations</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<WalletOutlined />}>
                <Link className='text-decoration-none' to="/dashboard/history">Payment History</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<RiShoppingBag2Line />}>
                  <Link as={Link} className='text-decoration-none' to="/dashboard/mycart">
                    My Cart
                    <span
                      className="badge mx-2"
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
                  </Link>
                </Menu.Item>
          </>
        }
         
          <hr className='text-white' />

          <Menu.Item key="6" icon={<HomeOutlined />}>
            <Link className='text-decoration-none' to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FaChalkboardTeacher />}>
            <Link className='text-decoration-none' to="/instructor">Instructors</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<FaUsers />}>
            <Link className='text-decoration-none' to="/classes">Classes</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ backgroundColor: '#F5F5F5', padding: '24px' }}>
          <div className="container">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
