const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  users: [],
  usersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.totalCount,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}

export const toggleFollowAC = userId => ({
  type: FOLLOW,
  userId,
})

export const follow = userId => ({
  type: FOLLOW,
  userId,
})

export const unfollow = userId => ({
  type: UNFOLLOW,
  userId,
})

export const setUsers = users => ({
  type: SET_USERS,
  users,
})

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setUsersCount = totalCount => ({
  type: SET_USERS_COUNT,
  totalCount,
})

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export default usersReducer
