const express = require('express');

const app = express();
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

app.use(express.json());

app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

app.use(express.static(`${__dirname}/static`));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(400);
});

app.listen(3000, () => console.log('Listening on port 3000'));
