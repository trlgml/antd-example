export const types = {
  DEMO_SET_LIST: 'demo/set_list',
  DEMO_ASYNC: 'demo/async',
}

export const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DEMO_SET_LIST:
      return { ...state, list: action.payload.list }
    default:
      return state
  }
}

export const actions = {
  demoSetList(list = []) {
    return { type: types.DEMO_SET_LIST, payload: { list } }
  },
  demoAsync() {
    return { type: types.DEMO_ASYNC }
  }
}