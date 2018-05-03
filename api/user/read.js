const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router()
const { rest } = require('../../helpers/return')
const { User } = require ('../../models/User')
const { paginate, itemsPerPage } = require('../../helpers/paginate')
const secret = require('../../helpers/secret');

router.get('/single', (req, res) => {
	const { userId } = req.query
	User.findOne({_id: userId}, (err, user) => {
		rest(res, err, user)
	})
})

router.get('/list', (req, res) => {
	const { page } = req.query
	User.find({}, (err, users) => {
		const data = paginate(users, itemsPerPage, page)
		rest(res, err, data)
	}) 
})

router.get('/login', (req, res) => {
	const { email, password } = req.query
	User.findOne({email}, (err, user) => {
		if (user) {
			if (password !== user.password) {
				res.json({
					success: false,
					data: null,
					message: 'Password incorrect'
				})
			} else {
				const token = jwt.sign({ data: user }, secret.secret, {
						expiresIn: 604800
				});
				rest(res, err, token)
			}
		}
	})
})

module.exports = router