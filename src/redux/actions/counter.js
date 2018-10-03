/**
 * ACTION TYPES
 */
export const COUNTER_RESET = "COUNTER/RESET";
export const COUNTER_ADD = "COUNTER/ADD";
export const COUNTER_SUBTRACT = "COUNTER_SUBTRACT";

/**
 * ACTIONS
 */
export const counterReset = () => ({
  type: COUNTER_RESET
});

export const counterAdd = payload => ({
  type: COUNTER_ADD,
  payload
});

export const counterSubstract = payload => ({
  type: COUNTER_SUBTRACT,
  payload
});

export const counterOperation = payload => ({
  type: COUNTER_SUBTRACT,
  payload
});
