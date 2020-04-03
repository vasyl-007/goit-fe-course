import types from "./types";

const handlers = {
  [types.ADD_CONTACT]: (state, { payload }) => [...state, payload],
  [types.DELETE_CONTACT]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  DEFAULT: state => state
};

export const contacts = (state = [], actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};
