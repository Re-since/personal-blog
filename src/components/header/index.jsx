import React, { useState, useEffect } from 'react'
import { 
  Layout,
  Row,
  Col,
  Menu,
  Button,
  Avatar,
  Popover
} from 'antd'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { mainRoutes } from '../../routes'
import { EXIT } from '../../redux/actionTypes'
import '../../assets/js/iconfont'
import '../../assets/css/iconfont.css'
import './index.less'

const { Header } = Layout

export default function MyHeader() {

  const [selectedKey, setSelectedKey] = useState('/ui/index')

  const history = useHistory()

  const dispatch = useDispatch()

  const user = useSelector(state => state.userReducer)

  const [userName, setUserName] = useState('')

  const [avatar, setAvatar] = useState('https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')

  useEffect(() => {
    const { pathname } = history.location
    setSelectedKey(pathname)
    setUserName(user.userInfo.nickname || user.userInfo.username)
    setAvatar(user.userInfo.avatar)
  }, [user, history.location])
  
  const headerClick = v => history.push(v.key)

  const loginUi = () => history.push('/login')

  const toUserCenter = () => history.push('/ui/userinfo')

  const logout = () => {
    localStorage.removeItem('uiToken')
    dispatch({ type: EXIT })
  }

  const content = (
    <ul>
      <li onClick={toUserCenter}>
        <SettingOutlined style={{marginRight: '8px'}} />
        修改资料
      </li>
      <li onClick={logout}><LogoutOutlined style={{marginRight: '8px'}} />退出登录</li>
    </ul>
  )

  return (
    <Header className="header-container">
      <Row>
        <Col lg={{span: 5}} md={{span: 8}} xs={{span: 0}}>
          <div className="logo">
            <span className="text-logo">My Blog</span>
          </div>
        </Col>
        <Col lg={{span: 16}} md={{span: 13}} xs={{span: 24}} className='mobile'>
          <Menu mode="horizontal" selectedKeys={ [selectedKey] }>
            {
              mainRoutes.filter(item => item.menu).map(item => (
                <Menu.Item 
                  key={item.path} 
                  onClick={ item => headerClick(item) }
                >
                  <svg className="icon menu-icon" aria-hidden="true">
                    <use xlinkHref={item.icon}></use>
                  </svg>
                    <span className="nav-text">{item.title}</span>
                </Menu.Item>
              ))
            }
          </Menu>
        </Col>
        <Col lg={{span: 2}} md={{span: 3}} xs={{span: 0}}>
          {
            user.isLogin ? (
              <Popover content={content} title={`用户：${userName}`}  placement="bottomRight">
                <span className="header-info">
                  <Avatar src={avatar} size="large" />
                </span>
              </Popover>
            ) : (
              <div className="btn-header">
                <Button 
                  type="primary" 
                  className="header-register"
                  onClick={loginUi}
                  style={{ marginLeft: '.5rem' }}
                >
                  登录
                </Button>
              </div>
            )
          }
        </Col>
      </Row>
    </Header>
  )
}
