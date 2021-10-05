const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { isValidToken } = require('./middlewares/validation');
const errors = require('./middlewares/routerNotFound');
const PORT = 3000;
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const userRouter = require('./Router/userRouter');
const postRouter = require('./Router/postRouter');
const teamRouter = require('./Router/teamRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('/user', userRouter);

app.use('/teams', teamRouter);

app.get(
  '/btc',
  isValidToken,
  async function (_req, res) {
    const result = await axios.get(ENDPOINTEXTERNALAPI);
    res.status(200).json(result.data);
  }
);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(PORT, () => { 
  console.log('Run server http://localhost:3000'); 
});