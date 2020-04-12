const mongoose = require('mongoose')

const QuesSchema = new mongoose.Schema({
    title: {type: String},
    back_img: {type: String},
    create_user_id: {type: String},
    content: {type: String},
    link: {type: String}
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})

const Ques = mongoose.model('Ques', QuesSchema)

module.exports = { Ques }