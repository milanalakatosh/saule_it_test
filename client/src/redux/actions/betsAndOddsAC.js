import axios from "axios";

export const setBetsAndOdds = (betsAndOdds) => ({ type: 'SET_BETS_AND_ODDS', payload: betsAndOdds});

export const getBetsAndOdds = () => async (dispatch) => {
	const betsAndOdds = await axios.get('http://localhost:3001/get/bets&odds');
	dispatch(setBetsAndOdds(betsAndOdds.data));
};