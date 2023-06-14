import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { FaChalkboardTeacher, FaClipboardList, FaList, FaUsers } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdLibraryAdd } from "react-icons/md";
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;  
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
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
          isAdmin?.admin ? 
          <>    
                <Menu.Item key="3" icon={< FaUsers/>}>
                <Link className='text-decoration-none' to="/dashboard/allusers">Manage Users</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<FaList/>}>
                <Link className='text-decoration-none' to="/dashboard/allclasses">Manage Classes</Link>
                </Menu.Item>
          </> :
           <>
              {isInstructor?.instructor ? <>
                <Menu.Item key="6" icon={<MdLibraryAdd />}>
                <Link className='text-decoration-none' to="/dashboard/addclass">Add a class</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<FaClipboardList />}>
                <Link className='text-decoration-none' to="/dashboard/addedClasses">My Classes</Link>
                </Menu.Item>
          </> :
           <>
                <Menu.Item key="8" icon={<AiOutlineFileDone />}>
                  <Link className='text-decoration-none' to="/dashboard/enrolledclass">Selected Class</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<RiShoppingBag2Line />}>
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
          </>}
        </>}
         
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
