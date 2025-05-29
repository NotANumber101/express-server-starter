const { assert } = require('chai');
describe('Array', () => {
  console.log('array test')
  describe('.pop()', () => {
    it('should return a value and remove the element from the array', () => {
      // setup
      const foo = [4];
      const includedNumber = 4; 
      // check setup
      assert.include(foo, includedNumber)
      

      // exercise
      const fooPop = foo.pop();

      // asserts
      assert.equal(fooPop, includedNumber)
      assert.equal(foo.length, 0)

    });
  });
});