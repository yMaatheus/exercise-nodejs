const userSchema = require('./schemas/userSchema');

const validateUser = (req, res, next)  => {
    const { username, email, password } = req.body;
    const passwordStr = password.toString();
    const { error } = userSchema.validate({ username, email, password: passwordStr });
    if (!error) {
        return next();
    }
    return res.status(400).json({ message: error.message });
}

module.exports = validateUser;