const Joi = require('joi');

const loginSchema = Joi.object({
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

module.exports = loginSchema;