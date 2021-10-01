import React from 'react'
import { Menu } from 'antd'

import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined
} from '@ant-design/icons'

const Navbar = () => {
  return (
    <>
      <Menu theme='light' mode='horizontal'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to='/user'>User</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/user/login'>Login</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/user/registration'>Registration</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/user/logout'>Logout</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Navbar
