// const componentGenerator = require('./component/index.js');
// const containerGenerator = require('./container/index.js');
const routeGenerator = require('./route/index.js');
const modelGenerator = require('./model/index.js');
const directory = require('inquirer-directory');

module.exports = function donistoNativeGenerator(plop) {
  // plop.setGenerator('component', componentGenerator);
  // plop.setGenerator('container', containerGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('model', modelGenerator);
  plop.addPrompt('directory', directory);
  plop.addHelper('cwd', () => `${process.cwd()}/src`);
};
