const connection = require('./connection');

const getAll = async () => {
  return await connection.execute(
    'SELECT * FROM albuns',
  );
};

const getById = async (id) => {
  return await connection.execute(
    'SELECT * FROM albuns WHERE id = ?',
    [id]
  );
};

const getByUser = async (id) => {
  return await connection.execute(
    'SELECT * FROM albuns WHERE user_id = ?',
    [id]
  );
};

const getByAlbum = async (album) => {
  return await connection.execute(
    'SELECT * FROM albuns WHERE album_name = ?',
    [album]
  );
};

const createAlbum = async (user_id, album, artist, year, gender, duration) => {
  return await connection.execute(
    `INSERT INTO albuns
    (user_id, album_name, artist, year, gender, duration)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [user_id, album, artist, year, gender, duration] 
  );
}

const editAlbum = async (id, user_id, album, artist, year, gender, duration) => {
  return await connection.execute(
    'UPDATE albuns SET user_id = ?, album_name = ?, artist = ?, year = ?, gender = ?, duration = ? WHERE id = ?',
    [user_id, album, artist, year, gender, duration, id],
  );
};

const deleteById = async (id) => {
  return await connection.execute(
    'DELETE FROM albuns WHERE id = ?',
    [id]
  );
};

module.exports = {
  getAll,
  getById,
  createAlbum,
  editAlbum,
  deleteById,
  getByAlbum,
  getByUser,
}