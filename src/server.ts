import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hello Word' });
});

app.listen(3333, () => {
  console.log('servidor subiu!');
});
