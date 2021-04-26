const jwt = require('jsonwebtoken');
const loginModels = require('../models/loginModels');
const CryptoJS = require('crypto-js');

const getAll = () => {
  const users = loginModels.getAll();
  return users;
};

const generateToken = (username) => {
  const secret = 'validarusuario';
  const token = jwt.sign({ data: username }, secret, { expiresIn: '30m', algorithm: 'HS256' });
  return token;
};

const validateLogin = async (username, password) => {
  const [user] = await loginModels.findUserByUsername(username);
  if(user.length > 0) {
    const key = username;
    const decryptedPass = CryptoJS.AES.decrypt(user[0].password, key).toString(CryptoJS.enc.Utf8);
    if(password === decryptedPass) {
      const token = generateToken(username);
      const loggedInUser = {
        id: user[0].id,
        name: user[0].name,
        username: user[0].username,
        token,
      };
      return loggedInUser;
    } else {
      return { error: true, code: 'unauthorized', message: 'Username or Password incorrect.' };
    }
  } else {
    return { error: true, code: 'unauthorized', message: 'Username or Password incorrect.' };
  }

};

const createUser = async (name, username, password) => {
  if (name, username, password) {
    const [exists] = await loginModels.findUserByUsername(username);
    if(exists.length === 0) {
      const key = username;
      const encryptedPass = CryptoJS.AES.encrypt(password, key).toString();
      await loginModels.createUser(name, username, encryptedPass)
      return { message: 'User created successfully.'}
    } else {
      return { error: true, code: 'conflict', message: 'This user already exists.'}
    }
  } else {
    return { error: true, code: 'internal_error', message: 'Name, username and password cannot be blank.'}
  }
};

module.exports = {
  validateLogin,
  generateToken,
  createUser,
  getAll,
};