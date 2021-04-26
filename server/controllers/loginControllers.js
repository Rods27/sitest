const { Router } = require('express');
const { ok, unauthorized, notFound } = require('../utilities/variables');

const loginServices = require('../services/loginServices');

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await loginServices.validateLogin(username, password);
  if (user.error && user.code === 'unauthorized') {
    return res.status(unauthorized).json({ message: user.message });
  } 
  res.status(ok).json(user)
}); 

loginRouter.get('/get-all', async (req, res) => {
  const [users] = await loginServices.getAll();
  res.status(ok).json(users)
}); 

loginRouter.post('/create', async (req, res) => {
  const { name, username, password } = req.body;
  const user = await loginServices.createUser(name, username, password);
  res.status(ok).json(user)
}); 

module.exports = loginRouter;