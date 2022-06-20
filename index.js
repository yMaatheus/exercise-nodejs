const express = require('express');
const app = express();

app.use(express.json());

const validateUser = require('./middlewares/userValidation');
const validateLogin = require('./middlewares/loginValidation');
const generateToken = require('./helpers/generateToken');

const users = [];

app.post('/user/register', validateUser, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = { username, email, password };
        users.push(newUser);
        return res.status(201).json({ message: "user created" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.post('/user/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;
        const correctEmailPassword = users.some(user => user.email === email && user.password === password);
        if (!correctEmailPassword) {
            return res.status(401).json({ message: "email or password is incorrect" });
        }
        const token = generateToken();
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.listen(3001, () => console.log('Servidor aberto na porta 3001'));