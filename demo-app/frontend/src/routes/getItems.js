const backend = require('../getmidsvcUrl');

module.exports = async (req, res, next) => {
  try {
    const items = await fetch(backend);
    const data = await items.json();
    return res.send(data);
  } catch (err) {
    return next(err);
  }
};
