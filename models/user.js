const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String, set(val){
        return require('bcrypt').hashSync(val, 10)
    }}
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}})

const User = mongoose.model('User', UserSchema)

module.exports = { User }