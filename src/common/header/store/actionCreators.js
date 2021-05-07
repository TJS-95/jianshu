import axios from 'axios'
import { fromJS } from 'immutable'
import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  CHANGE_LIST,
  MOUSE_CHANGE,
  CHANGE_PAGE,
} from './constants'

const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPages: Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type: SEARCH_BLUR,
})

export const mouseChange = (bool) => ({
  type: MOUSE_CHANGE,
  bool,
})

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
})

export const getList = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/headerList.json')
    dispatch(changeList(data.data))
  }
}
