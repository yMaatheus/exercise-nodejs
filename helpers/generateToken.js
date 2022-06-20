const generateToken = () => {
    const random1 = Math.random().toString(36).replace('0.', '');
    const random2 = Math.random().toString(36).replace('0.', '');
    return (random1 + random2).substring(0, 12);
}

module.exports = generateToken;