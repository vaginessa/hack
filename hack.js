/*
TODO:

- Array of HackerMan Quotes
- Initial design
- Initial args
- URL detection
- Internet connection detection
- more...
*/

//Dependencies
const ArgParse = require('argparse').ArgumentParser;

//Argparse Init
var parser = new ArgParse({
  version: '0.0.1',
  addHelp: true,
  description: 'Hack.js' //TODO: CHANGEME
})

//Argparse Arguments
parser.addArgument(['-t', '--target'], {
  help: "The target you want to hack."
})
