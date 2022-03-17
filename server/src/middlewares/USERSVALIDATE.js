"use strict"

const { VALIDATOR } = require('./BaseValidate')
// const { setRes }= require('../../Helpers/Response')
// const JWT = require('../../Auth/JWT')

module.exports = {
    CREATE_USERS: function (req, res, next) {
        let validate = new VALIDATOR.Validator(req.body, {
            first_name: 'required|string|maxLength:255',
            last_name: 'required|string|maxLength:255',
            nick_name: 'required|string|maxLength:255',
            birth_date: 'required|date',
            gender: 'required|decimal',
            email: 'required|email|uniqueUsers:email|maxLength:255',
            password: 'required|same:password_confirm|maxLength:255|minLength:6',
            password_confirm: 'required|maxLength:255|minLength:6',
            phone_number: 'required|phoneNumber|decimal|maxLength:14',
            number_id: 'required|decimal|maxLength:12|minLength:9',
            address: 'required|string|maxLength:255',
        }, {
            // 'firstName.required': 'firstName là trường bắt buộc',
            // 'lastName.required': 'lastName là trường bắt buộc',
            // 'nickName.required': 'nickName là trường bắt buộc',
            // 'email.required': 'email là trường bắt buộc',
            // 'email.email': 'email sai định dạng',
            // 'password.required': 'password là trường bắt buộc',
            // 'phoneNumber.required': 'phoneNumber là trường bắt buộc',
            // 'numberId.required': 'numberId là trường bắt buộc',
            // 'address.required': 'address là trường bắt buộc',
            'email.uniqueUsers': 'The email must be a already exists address.',
        })
        return validate.check()
            .then(matched => {
                if (!matched) {
                    res.status(422)
                    res.json({
                        messages: 'validate erros',
                        oldParams: req.body,
                        error: validate.errors
                    })
                } else {
                    next();
                }
            })
            .catch(err => {
                res.status(500)
                res.json({
                    messages: 'validate erros',
                    oldParams: req.body,
                    error: validate.errors,
                    er: err.messages
                })
            })
    },
    UPADTE_USERS: function (req, res, next) {
        let validate = new VALIDATOR.Validator(req.body, {
            firstName: 'sometimes|string|maxLength:255',
            lastName: 'sometimes|string|maxLength:255',
            nickName: 'sometimes|string|maxLength:255',
            birthDate: 'sometimes|date',
            gender: 'sometimes|decimal',
            email: 'email|uniqueUsers:email|sometimes|maxLength:255',
            password: 'sometimes|same:passwordConfirm|maxLength:255|minLength:6',
            passwordConfirm: 'sometimes|maxLength:255|minLength:6',
            phoneNumber: 'phoneNumber|decimal|sometimes|maxLength:14',
            numberId: 'decimal|sometimes|maxLength:12|minLength:9',
            address: 'sometimes|string|maxLength:255',
        }, {
            // 'firstName.required': 'firstName là trường bắt buộc',
            // 'lastName.required': 'lastName là trường bắt buộc',
            // 'nickName.required': 'nickName là trường bắt buộc',
            // 'email.required': 'email là trường bắt buộc',
            // 'email.email': 'email sai định dạng',
            // 'password.required': 'password là trường bắt buộc',
            // 'phoneNumber.required': 'phoneNumber là trường bắt buộc',
            // 'numberId.required': 'numberId là trường bắt buộc',
            // 'address.required': 'address là trường bắt buộc',
            'email.uniqueUsers': 'The email must be a already exists address.',
        })
        return validate.check()
            .then(matched => {
                if (!matched) {
                    setRes(res, 422, false, 'Validate fails', {
                        oldParams: req.body,
                        error: validate.errors
                    })
                } else {
                    next();
                }
            })
            .catch(err => {
                setRes(res, 500, false, 'Validate fails', {
                    params: req.body,
                    error: err + ''
                })
            })
    },
    EMAIL_EXIST: function (req, res, next) {
        let validate = new VALIDATOR.Validator(req.body, {
            email: 'mailExsist:email|maxLength:255',
        }, {
            'email.mailExist': 'The email not exists address.',
        })
        return validate.check()
            .then(matched => {
                if (!matched) {
                    setRes(res, 422, false, 'Validate fails', {
                        oldParams: req.body,
                        error: validate.errors
                    })
                } else {
                    next();
                }
            })
            .catch(err => {
                setRes(res, 500, false, 'Validate fails', {
                    params: req.body,
                    error: err + ''
                })
            })
    },
    TOKEN_VERIFY: function (req, res, next) {
        try {
            req.headers.authorization = 'Bearer ' + req.params.token
            let infor = JWT.verifyCode(req)
            let condition = {
                where: {
                    email: infor.email
                }
            }
            ModelUsers.findOne(condition)
                .then((result) => {
                    req.params["id"] = result.id
                    delete req.params.token
                    return next()
                }).catch((err) => {
                    setRes(res, 422, false, 'The email not found!', [], false)
                })

        } catch (error) {
            setRes(res, 422, false, 'User not allowed to access', [], false)
        }
    }
}