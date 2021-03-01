const express = require('express');
const connection = require('../../conf');
const router = express.Router();

const { getAllTeam, addTeam } = require('../controleur/teamControleur');

router.get('/', getAllTeam);
router.post('/', addTeam)

module.exports = router;