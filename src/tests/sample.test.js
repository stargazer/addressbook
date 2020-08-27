setupDB = require('./test-setup');
setupDB();

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
