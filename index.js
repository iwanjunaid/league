var path = require('path');

module.exports = function() {
  return new require(path.join(__dirname, 'libs/scraper.js'))();
};
