const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')
const config = require('config-lite')(__dirname)
const auth = require('../middlewares/auth')

router.get('/getusers', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.send(user)
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        return res.status(422).send({
            msg: 'user not exist'
        })
    }
    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if (!isPasswordValid) {
        return res.status(422).send({
            message: 'pwd not right'
        })
    }

    const token = jwt.sign({
        id: String(user._id),
    }, config.secret, { expiresIn:'10h' })
    res.send({
        user,
        token: token
    })
})

router.get('/profile', auth, async (req, res) => {
    res.send(req.user)
})

module.exports = router