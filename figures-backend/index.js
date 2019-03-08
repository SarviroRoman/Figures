const express = require ('express');
const app = express();

const figures = [
  {
    id: 1,
    type: 'Circle',
    area: 2000,
  },
  {
    id: 2,
    type: 'Square',
    area: 20,
  },
  {
    id: 3,
    type: 'Rectangle',
    area: 15,
  },
  {
    id: 4,
    type: 'Triangle',
    area: 1,
  },
];

app.get('/figures', (request, response) => {
  response.send(figures);
});

app.listen(3000, () => {
  console.log('application works on the port 3000');
});