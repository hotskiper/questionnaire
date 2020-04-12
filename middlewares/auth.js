const jwt = require('jsonwebtoken')
const config = require('config-lite')(__dirname)
const { User } = require('../models/user')
const auth = async (req, res, next) => {
    const raw = String(req.headers.authorization).split(' ').pop();
    const { id } = jwt.verify(raw, config.secret)
    req.user = await User.findById(id)
    next()
}

module.exports = auth