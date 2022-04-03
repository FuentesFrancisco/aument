import { SET_DATA_POST, SET_ACTION, SET_POST, SET_ALL_POST, SET_POST_EDIT, DELETE_POST } from '../actions'

const initialState = {
  // estado inicial de nuestro store
  action: "",
  posts: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case SET_DATA_POST:
      return {
        ...state,
        postData: action.payload
      }
    case SET_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts],
          postData: action.payload
        }
    case SET_POST_EDIT:
        return {
          ...state,
          posts: [action.payload, ...state.posts.filter(post => post._id !== action.payload._id)],
          postData: action.payload
        }
    case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload)
        }
    case SET_ACTION:
      return {
        ...state,
        action: action.payload
        }
    case SET_ALL_POST:
      return {
        ...state,
        posts: action.payload
        }
    default:
      return state
  }
}

export default rootReducer
