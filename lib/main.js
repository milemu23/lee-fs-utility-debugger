const winston = require('winston');

const path = require('./path.js');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      // handleExceptions: true,
      // json: true,
    }),
    new (winston.transports.File)({
      name: 'info',
      filename: path.infoPath,
      level: 'info',
    }),
    new (winston.transports.File)({
      name: 'error',
      filename: path.errorPath,
      level: 'error',
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.info(message);
  },
};
