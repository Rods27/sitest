const { Router } = require('express');

const { ok, notFound } = require('../utilities/variables')

const albumServices = require('../services/albumServices');

const albumRouter = Router();

albumRouter.get('/get-all', async (req, res) => {
  const [albuns] = await albumServices.getAll();
  res.status(ok).json(albuns)
});

albumRouter.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const [albuns] = await albumServices.getByUser(id);
  res.status(ok).json(albuns)
});

albumRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [albuns] = await albumServices.getById(id);
  res.status(ok).json(albuns)
});

albumRouter.post('/create', async (req, res) => {
  const { user_id, album, artist, year, gender, duration } = req.body;
  const albuns = await albumServices.createAlbum(
    user_id, album, artist, year, gender, duration
  );
  res.status(ok).json(albuns)
});

albumRouter.put('/edit/:id', async (req, res) => {
  const { user_id, album, artist, year, gender, duration } = req.body;
  const { id } = req.params;
  const albuns = await albumServices.editAlbum(
    id, user_id, album, artist, year, gender, duration
  );
  res.status(ok).json(albuns)
});

albumRouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const album = await albumServices.deleteById(id);
  if (album.error) {
    return res.status(notFound).json({ message: album.message });
  } else {
    return res.status(ok).json({ message: album.message });
  }
});


module.exports = albumRouter;