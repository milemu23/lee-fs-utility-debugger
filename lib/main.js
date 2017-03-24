const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)(),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.log(message);
  },
};

module.exports.updateVersion = (current, release) => { // semantic version update
  const v = current.split('.'); // used for incrementing
  var num; // used for incrementing

  if (v.length === 3) { // if there are '3' numbers in the version then go
    switch (release) {
      case 'major': // major release
        num = parseInt(v[0], 10) + 1; // add 1 to major release
        return `${num}.0.0`; // return the major release number
      case 'minor': // minor release
        num = parseInt(v[1], 10) + 1; // add 1 to minor release
        return `${v[0]}.${num}.0`; // return the minor release number
      case 'patch': // patch release
        num = parseInt(v[2], 10) + 1; // add 1 to patch reelease
        return `${v[0]}.${v[1]}.${num}`; // return the patch release number
      default:
        return 'Invalid release type!'; // return error if teh release is none of the above
    }
  }

  return 'Invalid version number!'; // return error if the version number doesnt contain 3 numbers
};
