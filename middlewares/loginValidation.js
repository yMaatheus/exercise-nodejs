const loginSchema = require('./schemas/loginSchema');

const validateLogin = (req, res, next)  => {
    const { email, password } = req.body;
    const passwordStr = password.toString();
    const { error } = loginSchema.validate({ email, password: passwordStr });
    if (!error) {
        return next();
    }
    return res.status(400).json({ message: error.message });
}

module.exports = validateLogin;