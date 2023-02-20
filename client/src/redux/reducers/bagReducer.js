import initState from '../initState';

/* eslint-disable default-param-last */
const bagReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_BAG':
      return payload;

    case 'SET_ADD_BAG':
      return [...state, payload];

    case 'SET_ADD_BAG_DELETE':
      return payload;

    case 'SET_INCREASE_BAG':
      return payload;

    case 'SET_DECREASE_BAG':
      return payload;

    case 'SET_CHANGE_VALUE_INPUT_BAG':
      return payload;

    default:
      return state;
  }
};

export default bagReducer;
