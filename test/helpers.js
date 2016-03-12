var Scraper = require('../libs/scraper');
var assert = require('assert');
var uuid = require('node-uuid');

global.assert = assert;
global.Scraper = Scraper;
global.nodeUuid = uuid;
