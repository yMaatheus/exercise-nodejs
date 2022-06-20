const express = require('express');
const app = express();

app.use(express.json());

const validateUser = require('./middlewares/userValidation');

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

app.listen(3001, () => console.log('Servidor aberto na porta 3001'));