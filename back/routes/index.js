const express = require('express')
const router = express.Router();


const team = require('./router/teamRouter');


router.use('/team', team)



module.exports = router;
