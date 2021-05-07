import { fromJS } from 'immutable'
import {
  CHANGE_LIST,
  CHANGE_PAGE,
  MOUSE_CHANGE,
  SEARCH_BLUR,
  SEARCH_FOCUS,
} from './constants'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPages: 0,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case MOUSE_CHANGE:
      return state.set('mouseIn', action.bool)
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPages: action.totalPages,
      })
    case CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
