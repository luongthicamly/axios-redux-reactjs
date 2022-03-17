"use strict"
const { sequelize } = require('./BaseModels')
const UsersModels = require('./UsersModels')
const Model = {}

Model.sequelize = sequelize

Model.UsersModels = UsersModels,
    // Association
    // Model.ModelUsers.belongsTo(ModelRoles, {foreignKey: 'roleId'})
    // Model.ModelUsers.hasMany(ModelFiles, {foreignKey: 'userId'})
    // Model.ModelUsers.hasMany(ModelGroupUsers, {foreignKey: 'userId'}) 

    module.exports = { ...Model }