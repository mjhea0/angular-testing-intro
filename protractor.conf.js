exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // where to find our test files
  specs: ['./test/e2e/*.js'],
  // use mocha
  framework: 'mocha',
  // spec is a display output option, slow sets the timeout boundary, and we enable Timeouts
  mochaOpts:{
    reporter:'spec',
    slow:3000,
    enableTimeouts: true
  },
  capabilities:{
    'browserName':'chrome'
  }
};