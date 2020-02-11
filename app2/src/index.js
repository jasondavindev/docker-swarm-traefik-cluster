const express = require('express');
const axios = require('axios').default;

const API_HOST = 'app:3000';

const app = express();

app.get('/app2', async (req, res) => {
  const { data } = await axios.get(`http://${API_HOST}/app`);
  return res.json({ ...data, date: Date.now() });
});

app.listen(5000, () => console.log('listening'));
