var async = require('async'),
  path = require('path'),
  _ = require('lodash');
var selector = require(path.join(__dirname, 'selector'))();

function Scraper() {}

module.exports = function() {
  return new Scraper();
};

Scraper.prototype.scrape = function(leagues) {
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
      if (results.length)
        resolve(_.sortBy(results, 'order'));
      else
        resolve(results);
    });
  });
};
