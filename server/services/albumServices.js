const albumModels = require('../models/albumModels');

const getAll = async () => {
  const albuns = await albumModels.getAll();
  return albuns;
};

const getById = async (id) => {
  const album = await albumModels.getById(id);
  return album;
};

const getByUser = (id) => {
  const users = albumModels.getByUser(id);
  return users;
};

const createAlbum = async (user_id, album, artist, year, gender, duration) => {
  if(user_id && album && artist && year && gender && duration){
    if (typeof user_id !== 'number' || typeof duration !== 'number' || typeof year !== 'number') {
      return { error: true, code: 'conflict', message: 'user_id, year and duration must be numbers.' };
    }
    if (album.length > 20) {
      return { error: true, code: 'conflict', message: 'Album name cannot bypass 20 characters.' };
    } 
    if (artist.length > 30) {
      return { error: true, code: 'conflict', message: 'Artist name cannot bypass 30 characters.' };
    }
    if (gender.length > 10) {
      return { error: true, code: 'conflict', message: 'Gender name cannot bypass 10 characters.' };
    }
     const [exists] = await albumModels.getByAlbum(album);
     if (exists && exists.length > 0) {
      return { error: true, code: 'conflict', message: 'Album already exists.'};
    } else {
      await albumModels.createAlbum(user_id, album, artist, year, gender, duration);
      return { message: 'Album created sucessfully.' };
    }
  }
};

const editAlbum = async (id, user_id, album, artist, year, gender, duration) => {
  if(id && user_id && album && artist && year && gender && duration){
    if (typeof user_id !== 'number' || typeof duration !== 'number' || typeof year !== 'number') {
      return { error: true, code: 'conflict', message: 'user_id, year and duration must be numbers.' };
    }
    if (album.length > 20) {
      return { error: true, code: 'conflict', message: 'Album name cannot bypass 20 characters.' };
    } 
    if (artist.length > 30) {
      return { error: true, code: 'conflict', message: 'Artist name cannot bypass 30 characters.' };
    }
    if (gender.length > 10) {
      return { error: true, code: 'conflict', message: 'Gender name cannot bypass 10 characters.' };
    }
    const [exists] = await albumModels.getById(id);
    if (exists && exists.length > 0) {
      await albumModels.editAlbum(id, user_id, album, artist, year, gender, duration);
      return { message: 'Album edited sucessfully.' };
    } else {
      return { error: true, code: 'not_found', message: 'Album not found.'};
    }
  }
};

const deleteById = async (id) => {
  const [album] = await albumModels.getById(id);
  if (album && album.length > 0) {
    await albumModels.deleteById(id);
    return { message: 'Album deleted sucessfully.' };
  } else {
    return { error: true, code: 'not_found', message: 'Album not found.' };
  }
};

module.exports = {
  getAll,
  getById,
  createAlbum,
  editAlbum,
  deleteById,
  getByUser,
};