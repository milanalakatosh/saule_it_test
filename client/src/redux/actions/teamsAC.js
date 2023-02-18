import axios from "axios";

export const setTeams = (teams) => ({ type: 'SET_TEAMS', payload: teams});

export const getTeams = () => async (dispatch) => {
	const teams = await axios.get('http://localhost:3001/get/teams');
	dispatch(setTeams(teams.data));
};