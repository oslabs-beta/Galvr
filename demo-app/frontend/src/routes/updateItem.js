const nodeFetch = require('node-fetch');
const backend = require('../backendUrl');

module.exports = async (req, res, next) => {
  try {
    const item = await nodeFetch(`${backend}/${req.params.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: req.body.name,
        completed: req.body.completed,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await item.json();
    return res.send(data);
  } catch (err) {
    return next(err);
  }
};
