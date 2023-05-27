const backend = require('../postmidsvcUrl');

module.exports = async (req, res, next) => {
  try {
    const item = await fetch(backend, {
      method: 'POST',
      body: JSON.stringify({ name: req.body.name }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await item.json();
    return res.send(data);
  } catch (err) {
    return next(err);
  }
};
