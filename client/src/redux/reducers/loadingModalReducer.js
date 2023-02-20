import initState from '../initState';

/* eslint-disable default-param-last */
const loadingModalReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CHANGE_SHOW':
      return payload;

    default:
      return state;
  }
};

export default loadingModalReducer;
