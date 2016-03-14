var async = require('async'),
  path = require('path'),
  util = require('util'),
  EventEmitter = require('events'),
  _ = require('lodash');
var selector = require(path.join(__dirname, 'selector'))();

function Scraper() {
  EventEmitter.call(this);
}

util.inherits(Scraper, EventEmitter);

module.exports = function() {
  return new Scraper();
};

Scraper.prototype.scrape = function(id, leagues) {
  var self = this;

  return new Promise(function(resolve, reject) {
    var results = [];

    async.each(leagues, function(league, leagueCb) {
      var scraper = selector.getScraper(league.league);

      if (scraper) {
        scraper.init(function() {
          scraper.helpers.standings.full().then(function(res) {
            res.driver.close();
            results.push({
              league: league.league,
              order: league.order,
              scraperInfo: scraper.info(),
              data: res.data
            });

            leagueCb();
          }).catch(function(err) {
            leagueCb(err);
          });
        });
      } else {
        leagueCb();
      }
    }, function(err) {
      if (err) {
        self.emit('done:with-error', id);
        reject(err);
      } else {
        self.emit('done', id);

        if (results.length) {
          resolve({
            uuid: id,
            results: _.sortBy(results, 'order')
          });
        }
        else {
          resolve({
            uuid: id,
            results: results
          });
        }
      }
    });
  });
};
