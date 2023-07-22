const { v4: uuid } = require('uuid');
const db = require('../persistence');

module.exports = async (req, res) => {
  const item = {
    id: uuid(),
    name: req.body.name,
    completed: false,
  };

  await db.storeItem(item);
  res.send(item);
};
