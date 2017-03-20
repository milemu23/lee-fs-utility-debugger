const logger = require('../lib/main.js');
const expect = require('chai').expect;

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

  const version = require('../lib/main').updateVersion;
  describe('Lee FS Utility Debugger Test', () => {
    describe('Test version change function', () => {
      it('Update major version', () => {
        const newVersion = version('1.3.2', 'major');
        expect(newVersion).to.equal('2.0.0');
      });
      it('Update minor version', () => {
        const newVersion = version('1.3.2', 'minor');
        expect(newVersion).to.equal('1.4.0');
      });
      it('Update patch version', () => {
        const newVersion = version('1.3.2', 'patch');
        expect(newVersion).to.equal('1.3.3');
      });
      it('Bad release entered', () => {
        const newVersion = version('1.3.2', 'match');
        expect(newVersion).to.equal('Invalid release');
      });
      it('Bad version entered', () => {
        const newVersion = version('1.3.2.3', 'match');
        expect(newVersion).to.equal('Invalid version');
      });
    });
  });
});
