"use strict"
const VALIDATOR = require('node-input-validator')
const { Validator } = require('node-input-validator')

const { UsersModels } = require('../models')
const { ROW_DELETE } = require('../config')

VALIDATOR.extend('uniqueUsers', async ({ value, args }) => {
    let field = args[0] || 'email'
    let condition = {
        where: {
            [field]: value,
            is_delete: ROW_DELETE.NOT_DELETE
        }
    }
    let result = await UsersModels.findAll(condition)
    return !(result.length > 0)
})

VALIDATOR.extend('mailExsist', async ({ value, args }) => {
    let field = args[0] || 'email'
    let condition = {
        where: {
            [field]: value,
            is_delete: ROW_DELETE.NOT_DELETE
        }
    }
    let result = await UsersModels.findAll(condition)
    return (result.length > 0)
})
VALIDATOR.extend('regUsers', async ({ value, args }) => {
    return (value.indexOf(',') > 0)
})
module.exports = {
    VALIDATOR: VALIDATOR,
    Validator: Validator
}