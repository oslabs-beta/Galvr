const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongo-svc:27017/galvr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const testSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  metrics: {},
});

module.exports = mongoose.model('Test', testSchema);
