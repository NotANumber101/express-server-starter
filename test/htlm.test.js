const { assert } = require('chai');
const { parseTextFromHTML } = require('./setup')

describe('HTML tests', () => {
  describe('#bar', () => {
    it('should include the string "Hello"', () => {
      // setup
      const foo = '<html><div id="bar">Hello</div><div id="buzz">World</div><html>';
      //asserts
      assert.include(parseTextFromHTML(foo, '#bar'), 'Hello'); 
      assert.include(parseTextFromHTML(foo, '#buzz'), 'World'); 
    });
  });
});