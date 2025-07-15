import React from 'react';
import { TeamOutlined, QuestionCircleTwoTone, UserOutlined } from '@ant-design/icons';
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import { Menu, Flex, Divider, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const menuSections: MenuProps['items'][] = [
    [
      {
        key: '/dashboard',
        icon: <BiSolidDashboard />,
        label: 'Dashboard',
      },
      {
        key: 'supplier',
        icon: <TeamOutlined />,
        label: 'Supplier Management',
        children: [
          { key: '/dashboard', label: 'Dashboard' },
          { key: '/suppliers', label: 'Supplier List' },
          { key: '/reviews', label: 'Review & Approvals' },
          { key: '/configurations', label: 'Configurations' },
        ],
      },
      {
        key: '/funnels',
        icon: <GoLinkExternal />,
        label: 'Funnel Management',
        children: [],
      }
    ],
    [
      {
        key: '/help',
        icon: <QuestionCircleTwoTone />,
        label: 'Help & Support'
      },
      {
        key: 'user',
        icon: <FaRegUserCircle style={{ color: 'red' }} />,
        label: <span style={{ color: 'red' }}>John Dae</span>,
        children: [],
      }
    ]
  ];

  return (
    <Flex justify="space-between" vertical style={{ height: '100%' }}>
      <div>
        <Flex align="center" gap={10} style={{ paddingLeft: '1.5rem' }}>
          <Avatar size="large" icon={<UserOutlined />} />
          <h1>ALISA</h1>
        </Flex>
        <Divider />
        <Menu
          mode="inline"
          onClick={onClick}
          selectedKeys={[location.pathname]}
          defaultOpenKeys={['supplier']}
          items={menuSections[0]}
        />
      </div>
      <div>
        <Divider />
        <Menu
          mode="inline"
          onClick={onClick}
          selectedKeys={[location.pathname]}
          items={menuSections[1]}
        />
      </div>
    </Flex>
  );
};

export default SidebarMenu;
