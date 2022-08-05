import axios from '../../utils/http'

export const getAllArticle = () => axios.get('/ui/getHomeList')
export const getArticleById = id => axios.get('/ui/getById', {params:{id}})
export const addLike = id => axios.get('/ui/addLike', {params:{id}})
export const addLook = id => axios.get('/ui/addLook', {params:{id}})
export const fuzzySearch = word => axios.get('/ui/searchUi', {params:{word}})