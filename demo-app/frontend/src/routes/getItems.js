const axios = require('axios');
const backend = require('../getmidsvcUrl');

// module.exports = async (req, res, next) => {
//   try {
//     const items = await fetch(backend);
//     const data = await items.json();
//     return res.send(data);
//   } catch (err) {
//     return next(err);
//   }
// };

module.exports = async (req, res, next) => {
  // axios
  //   .get(backend)
  //   .then((response) => res.send(response.data))
  //   .catch((err) => console.log(err));

  try {
    const response = await axios.get(backend);
    return res.send(response.data);
  } catch (err) {
    return next(err);
  }
};
