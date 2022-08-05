import {
  GET_COLLECTION,
  GET_ARTICLE,
  LOGIN,
  EDIT_USER,
  GETARTICLE_BYID,
  ADD_LIKE,
  ADD_LOOK,
  FUZZY_SEARCH,
} from './actionTypes'
import {
  addUser,
  editUser,
  getAllArticle,
  login,
  getArticleById,
  addLike,
  addLook,
  fuzzySearch,
  getCollection,

} from '../api'
import jwtDecode from 'jwt-decode'
import jwt from 'jsonwebtoken'
import { message } from 'antd'
import { config } from '../utils'

export const getHomeList = () => {
  return async dispatch => {
    let { data } = await getAllArticle()
    dispatch({ data, type: GET_ARTICLE })
  }
}

export const getArtByIdAction = id => {
  return async dispatch => {
    let { data } = await getArticleById(id)
    dispatch({ data, type: GETARTICLE_BYID })
  }
}


export const addUserAction = (config, history) => {
  return async () => {
    let { data } = await addUser(config)
    if (data) {
      message.success('注册成功！将自动跳转登录页')
      setTimeout(() => {
        history.push('/login')
      }, 500);
    } else {
      message.error('用户名已被注册！')
    }
  }
}

export const loginAction = (config) => {
  return async dispatch => {
    let data = await login(config)
    if (data.token) {
      localStorage.setItem('uiToken', data.token)
      let userInfo = jwtDecode(data.token)
      dispatch({ data: userInfo, type: LOGIN })
      message.success('登录成功！')
    }
    else {
      message.error(data)
    }
  }
}

export const editUserAction = value => {
  return async dispatch => {
    let { data } = await editUser(value)
    const { id, username, nickname, avatar, email, password } = data[0]
    const token = jwt.sign({
      id,
      username,
      nickname,
      avatar,
      email,
      password
    }, config.jwtSecret)
    localStorage.setItem('uiToken', token)
    dispatch({ data: data[0], type: EDIT_USER })
  }
}

export const addLikeAction = id => {
  return async dispatch => {
    let { data } = await addLike(id)
    dispatch({ data, type: ADD_LIKE })
  }
}

export const addLookAction = id => {
  return async dispatch => {
    let { data } = await addLook(id)
    dispatch({ data, type: ADD_LOOK })
  }
}

export const searchAction = word => {
  return async dispatch => {
    let { data } = await fuzzySearch(word)
    dispatch({ data, type: FUZZY_SEARCH })
  }
}

export const getCollectionAction = () => {
  return async dispatch => {
    let { data } = await getCollection()
    dispatch({ data, type: GET_COLLECTION })
  }
}