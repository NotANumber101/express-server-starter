const jsdom = require('jsdom');
const { JSDOM } = jsdom;

console.log('Running Test Setup...')

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

console.log('Test Setup Complete!')