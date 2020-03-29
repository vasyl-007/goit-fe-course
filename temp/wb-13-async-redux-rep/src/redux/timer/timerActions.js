export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_STEP: "CHANGE_STEP"
};

export const increment = value => ({
  type: Type.INCREMENT,
  // payload: String(value),
  payload: value,
  meta: {
    throttle: 2000,
    analytics: true
  }
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
  meta: {
    throttle: 2000,
    analytics: true
  }
});

export const changeStep = step => ({
  type: Type.CHANGE_STEP,
  payload: step
});
