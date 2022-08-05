import { combineReducers } from 'redux'
import { articleReducer } from './article'
import { userReducer } from './user'
import { collectionReducer } from './collection'

const rootReducer = combineReducers({
  articleReducer,
  userReducer,
  collectionReducer,
})

export default rootReducer