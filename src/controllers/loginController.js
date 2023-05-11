const { tokenCreate } = require('../auth/token');

const login = async (req, res) => {
    const { email } = req.body;
    
    const token = tokenCreate({ data: { email } });
  
    return res.status(200).json({ token });
};

module.exports = { login };