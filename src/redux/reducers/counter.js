import { COUNTER_RESET, COUNTER_ADD } from "../actions"

const initialState = {
  current: 0,
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_RESET:
      return initialState
    case COUNTER_ADD:
      const nextCurrent = state.current + payload
      // return Object.assign({}, state, {current: state.current + payload})
      return { ...state, current: nextCurrent > 0 ? nextCurrent : 0 }
    default:
      return state
  }
}

export default counterReducer
