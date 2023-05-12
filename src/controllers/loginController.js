const { tokenCreate } = require('../auth/token');
const service = require('../services/loginService');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await service.getUser(email, password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = tokenCreate({ data: { email } });

    return res.status(200).json({ token });
};

module.exports = { login };