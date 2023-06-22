const { registerUserService } = require('../services');

const registerController = async (req, res, next) => {
  const { name, password } = req.body;
  if ( (name === '') && (password === '') ) return res.status(400).json({ error: 'Usuario e senha nao informados na criacao de usuario' }).next();
  if ( (name === '') || (password === '') ) return res.status(400).json({ error: 'Usuario ou senha nao informados na criacao de usuario' }).next();
  
  try {
    const result = await registerUserService(name, password);
    if ((result === null) && (name != "")) return res.status(409).json({ message: 'Usuario ja existente. Tente outro username!' });
    if ((result === null)) return res.status(400).json({ message: 'Usuario ja existente. Tente outro username!' });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerController,
};
