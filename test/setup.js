const jsdom = require("jsdom");
const { JSDOM } = jsdom;

console.log('Executing JSDOM Test Setup...')
/**
 * This function takes the HTML response as a string and the desired selector 
 * as inputs and returns the textContent of the corresponding element.
 * If no element is found, it will return a TypeError.
 */
const parseTextFromHTML = (htmlAsString, selector) => {

  const dom = new JSDOM(htmlAsString);
  const selectedElement = dom.window.document.querySelector(selector);

  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};
module.exports = {parseTextFromHTML}
console.log('Test Setup Complete!')