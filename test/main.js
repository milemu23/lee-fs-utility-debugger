const logger = require('../lib/main.js');

// Testing that logs are output
describe('Logging Tests', () => {
  // Test for Multiple Apps
  it('should log an info request', () => {
    logger.info('This is an info log');
  });
  // Test for a single app
  it('should log an error request', () => {
    logger.error('This is an error log');
  });
});
