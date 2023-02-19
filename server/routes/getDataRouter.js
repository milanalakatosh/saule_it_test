const express = require('express');
const router = express.Router();
import { teams } from '../db/teamsData';
import { oddsHeaders } from '../db/headersOddsData';
import { odds } from '../db/oddsData';


router.get('/teams', async (req, res) => {
	// const teams = await Teams.findAll({ raw: true }); if there was a database a query to it would be like this(sequelize)
	res.json(teams);
});

router.get('/odds-headers', async (req, res) => {
	// const oddsHeaders = await OddsHeaders.findAll({ raw: true });
	res.json(oddsHeaders);
})

router.get('/odds', async (req, res) => {
	// const odds = await Odds.findAll({ raw: true });
	res.json(odds);
})

module.exports = router
