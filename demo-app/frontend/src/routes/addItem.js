const nodeFetch = require('node-fetch');
const backend = require('../postmidsvcUrl');

module.exports = async (req, res, next) => {
  try {
    const item = await nodeFetch(backend, {
      method: 'POST',
      body: JSON.stringify({ name: req.body.name }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await item.json();
    console.log('addItem Data', data)
    return res.send(data);
  } catch (err) {
    return next(err);
  }
};
