import { initState } from '../initState';

export const betsAndOddsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_BETS_AND_ODDS':
      return payload;
    default:
      return state;
  }
};
