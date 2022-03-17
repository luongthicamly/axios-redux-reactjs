const routes = require('express').Router()
const UserControllers = require('../../controllers/UsersControllers')
const { CREATE_USERS } = require('../../middlewares/USERSVALIDATE')

routes.get('/users/:id?', UserControllers.getUsers)
routes.get('/tes', (req, res) => {

})
routes.post('/users', CREATE_USERS, UserControllers.createUsers)

module.exports = routes