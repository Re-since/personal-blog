import {
  getAllArticle,
  fuzzySearch,
  getArticleById,
  addLike,
  addLook
} from './article'
import { addUser, login, editUser  } from './user'
import {getCollection} from './collection';

export {
  getCollection,
  getAllArticle,
  addUser,
  login,
  editUser,
  getArticleById,
  addLike,
  addLook,
  fuzzySearch,
}