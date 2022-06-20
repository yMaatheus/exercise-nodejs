const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .min(4)
        .required()
        .messages({
            "string.base": "O campo username deve ser uma string",
            "string.min": "O campo username deve ter no mínimo 4 caracteres",
            "any.required": "O campo username é obrigatório"
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "O campo email deve ser um email válido",
            "any.required": "O campo email é obrigatório"
        }),
    password: Joi.string()
        .min(4)
        .max(8)
        .required()
        .messages({
            "number.base": "O campo password deve ser um número",
            "number.min": "O campo password deve ter no mínimo 4 números",
            "number.max": "O campo password deve ter no máximo 8 números",
            "any.required": "O campo password é obrigatório"
        })
})

module.exports = userSchema;