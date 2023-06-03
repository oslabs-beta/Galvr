const express = require('express');

const app = express();

app.use('/*', (req, res) => {
  console.log(req);
  res.status(200).send();
});

// Error handler
// app.use((err, req, res, next) => {
//   console.log(`Error: ${err}`);
//   res.status(400);
// });

app.listen(3000, () => console.log('Listening on port 3000'));
