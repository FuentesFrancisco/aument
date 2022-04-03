import Axios from '../../axios'
import Swal from 'sweetalert2';

export const SET_DATA_POST = 'SET_DATA_POST'
export const SET_ACTION = 'SET_ACTION'
export const SET_POST = 'SET_POST'
export const SET_ALL_POST = 'SET_ALL_POST'
export const SET_POST_EDIT = 'SET_POST_EDIT'
export const DELETE_POST = 'DELETE_POST'

export const createPost = data => {
  return function (dispatch) {
    return Axios.post(`/posts`, data)
      .then(payload => {
        dispatch({
          type: SET_POST,
          payload: payload.data
        })
      })
  }
}

export const editPost = data => {
  return function (dispatch) {
    return Axios.put(`/posts/${data._id}`, data)
      .then(payload => {
        dispatch({
          type: SET_POST_EDIT,
          payload: data
        })
      })
  }
}

export const deletePost = id => {
  return function (dispatch) {
    return Axios.delete(`/posts/${id}`)
      .then( responde => {    
        Swal.fire({
					icon: 'success',
					title: 'Post deleted',
				});
        dispatch({
          type: DELETE_POST,
          payload: id
        })
      })
  }
}

export const getPosts = () => {
  return function (dispatch) {
    return Axios.get(`/posts`)
      .then(payload => {
        dispatch({
          type: SET_ALL_POST,
          payload: payload.data
        })
      })
  }
}


export const postData = data => {
  return function (dispatch) {
      dispatch({
          type: SET_DATA_POST,
          payload: data
        })
  }
}

export const setAction = value => {
  return function (dispatch) {
      dispatch({
          type: SET_ACTION,
          payload: value
        })
  }
}
