import { COUNTER_RESET, COUNTER_ADD, COUNTER_SUBTRACT } from "../actions";

const initialState = {
  current: 0
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_RESET:
      return initialState;
    case COUNTER_ADD:
      // return Object.assign({}, state, {current: state.current + payload})
      return { ...state, current: state.current + payload };
    case COUNTER_SUBTRACT:
      return { ...state, current: state.current - payload };
    default:
      return state;
  }
};

export default counterReducer;
