const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const cors       = require('cors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(cors());

  require('../src/routes/index')(app);

  return app;
};