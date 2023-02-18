import { initState } from '../initState';

export const teamsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_TEAMS':
      return payload;

    default:
      return state;
  }
};
