var app = require('./index');
var scraper = app.scraper();
var excel = app.excel();

scraper.on('starting', function(id) {
  console.log(id);
});

scraper.on('progress', function(stat) {
  console.log(stat.progress);
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


excel.on('done', function(res) {
  console.log(res);
});
