const { hashCode } = require('../Auth/Bcrypt')
const { UsersModels } = require('../models')

module.exports = {
    getUsers: (req, res) => {
        let params = req.params
        let data = UsersModels.findAll()
        res.status(200)
        res.json(data)
    },

    createUsers: async (req, res) => {
        let params = req.body

        // let data = await UsersModels.create(params)
        // res.json(data)
        params.password = await hashCode(params.password);
        console.log(params)
        UsersModels.create(params)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}