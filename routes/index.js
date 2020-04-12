module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('123')
    })
    

    app.use('/api/user', require('./user'))
}