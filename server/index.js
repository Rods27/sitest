const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginController = require('./controllers/loginControllers');
const albumController = require('./controllers/albumControllers');

const app = express();

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (_request, response) => response.send("Ok"));

app.use('/app/login', loginController);

app.use('/app/albuns', albumController);

