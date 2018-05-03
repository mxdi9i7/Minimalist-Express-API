const express = require('express')
const router = express.Router()
const { rest } = require('../../helpers/return')
const { User } = require ('../../models/User')
const jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/user', function(req, res) {
  const { email, password } = req.body
  const newUser = User({
			email, password,
			createdAt: new Date()
	})
	newUser.save((err, savedUser) => {
		rest(res, err, savedUser)
	})
});

module.exports = router;
