const services = require('../services/loginService');
const { tokenCreate } = require('../auth/token');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const user = await services.getUser(email, password);
    
    if (!user) return res.status(400).json({ message: 'Invalid Fields' });
    
    const token = tokenCreate({ data: { email } });
  
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };