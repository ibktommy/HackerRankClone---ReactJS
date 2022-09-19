import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {

  switch (action.type) {
    case SET_LOADING: return {
      ...state,
      isLoading: true
    }
    case SET_STORIES: return {
      ...state,
      isLoading: false,
      responseData: action.payload.responseData,
      totalPages: action.payload.totalPages,
    }
    case REMOVE_STORY: return {
      ...state,
      responseData: state.responseData.filter((item) => item.objectID !== action.payload)
    }
    case HANDLE_SEARCH: return {
      ...state,
      page: 0,
      searchTerm: action.payload
    }

    default: throw new Error(`No Matching "${action.type}" action type`)
  }
}
export default reducer