var app = require('./index');
var scraper = app.scraper();
var excel = app.excel();

process.on('uncaughtException', (err) => {
  console.log(err);
});

scraper.on('starting', function(id) {
  console.log('event:', 'starting', id);
});

scraper.on('progress', function(stat) {
  console.log('event:', 'progress', stat);
});

scraper.on('initializing', function(stat) {
  console.log('event:', 'initializing', stat);
});

scraper.on('scraping', function(stat) {
  console.log('event:', 'scraping', stat);
});

scraper.on('scraped', function(stat) {
  console.log('event:', 'scraped', stat);
});

scraper.on('done', function(stat) {
  console.log('event:', 'done', stat);
});

scraper.scrape(1, [
  {league: 'la-liga', order: 1},
  {league: 'premier', order: 2},
  {league: 'serie-a', order: 3},
  {league: 'bundesliga', order: 4}
]).then(function(res) {
  excel.generate(res.results, 'example.xlsx').then(function(res) {
    console.log(res);
  });
});


// excel.on('done', function(res) {
//   console.log(res);
// });
