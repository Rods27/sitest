const connection = require('./connection');

const getAll = async () => {
  return await connection.execute(
    'SELECT * FROM accounts',
  );
};

const findUserByUsername = async (username) => {
  return await connection.execute(
    'SELECT * FROM accounts WHERE username = ?',
    [username] 
  );
};

const createUser = async (name, username, password) => {
  return await connection.execute(
    `INSERT INTO accounts
    (name, username, password)
    VALUES (?, ?, ?)`,
    [name, username, password] 
  );
};

module.exports = {
  getAll,
  findUserByUsername,
  createUser,
}