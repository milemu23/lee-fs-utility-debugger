const paths = require('../lib/path.js');

const infoPath = 'src/logs/app.log';
const errorPath = 'src/logs/error.log';

describe('Path Tests', () => {
  // Test for Correct Paths
  it('should return the correct info log path', () => {
    const info = paths.infoPath;

    if (info === infoPath) {
      return true;
    }

    return false;
  });

  it('should return the correct error log path', () => {
    const error = paths.errorPath;

    if (error === errorPath) {
      return true;
    }

    return false;
  });
});
