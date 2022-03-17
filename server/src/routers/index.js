const routes = require('express').Router()

routes.use(require('./client'))

// routes.use('/admin', require('./admin'))

module.exports = routes