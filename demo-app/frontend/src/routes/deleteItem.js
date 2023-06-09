const nodeFetch = require('node-fetch');
const backend = require('../backendUrl');

module.exports = async (req, res, next) => {
  try {
    await nodeFetch(`${backend}/${req.params.id}`, { method: 'DELETE' });
    return res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};
