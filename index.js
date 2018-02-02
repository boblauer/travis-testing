const assert = require('assert');

describe('Testing something awesome', () => {
  it('should pass 1 of 3', () => {
    assert.equal(1, 1);
  });

  it('should fail 2 of 3', () => {
    assert.equal(1, 2);
  });

  it('should pass 3 of 3', () => {
    assert.equal(1, 1);
  });
});