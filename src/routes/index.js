import {
  UiHome,
  Detail,
  Register,
  Login,
  NotFound,
  UserInfo,
  UiCollect
} from '../pages'

export const outRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/404',
    component: NotFound
  }
]

export const mainRoutes = [
  {
    menu: true,
    icon: '#icon-Homeloan',
    title: '首页',
    path: '/ui/index',
    component: UiHome
  },
  {
    menu: true,
    icon: '#icon-shoucang',
    title: '收藏',
    path: '/ui/collection',
    component: UiCollect
  },
  {
    path: '/ui/detail/:id',
    component: Detail
  },
  {
    path: '/ui/userinfo',
    component: UserInfo
  },
]
