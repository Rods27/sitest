import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export async function login(username, password) {
  try {
    const user = await axios.post(`${URL_BASE}/app/login/`,
      { username, password })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function create(name, username, password) {
  try {
    const user = await axios.post(`${URL_BASE}/app/login/create`,
      { name, username, password })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function getAlbuns(id) {
  try {
    const user = await axios.get(`${URL_BASE}/app/albuns/user/${id}`)
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function editAlbum(id, user_id, album, artist, year, gender, duration) {
  try {
    const user = await axios.put(`${URL_BASE}/app/albuns/edit/${id}`,
      { user_id, album, artist, year, gender, duration })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function deleteAlbum(id) {
  try {
    const user = await axios.delete(`${URL_BASE}/app/albuns/delete/${id}`,
      { id })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function createAlbum(user_id, album, artist, year, gender, duration) {
  try {
    const user = await axios.post(`${URL_BASE}/app/albuns/create`,
      { user_id, album, artist, year, gender, duration })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}
