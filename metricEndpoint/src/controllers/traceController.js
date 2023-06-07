const { traceRequest } = require('../proto');

const traceController = {};

traceController.traceDecoder = (req, res, next) => {
  try {
    if (req.body) {
      const trace = traceRequest.decode(req.body);
      res.locals.trace = trace;
    }
    return next();
  } catch (err) {
    return next({ log: err, message: 'Error decoding trace' });
  }
};

traceController.traceSaver = (req, res, next) => {
  try {
    if (res.locals.trace) {
      console.log('trace: ', JSON.stringify(res.locals.trace));
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving trace' });
  }
};

module.exports = traceController;
