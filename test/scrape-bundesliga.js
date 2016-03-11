describe('Scraping Bundesliga', function() {
  var results = null;

  before(function(done) {
    scraper.scrape([{
      league: 'bundesliga',
      order: 1
    }]).then(function(res) {
      results = res;
      done();
    });
  });

  it('should returns one result', function(done) {
    assert.equal(1, results.length);
    done();
  });

  it('should has property "league" with value "bundesliga"', function(done) {
    assert.equal('bundesliga', results[0].league);
    done();
  });

  it('should has property "order" with value 1', function(done) {
    assert.equal(1, results[0].order);
    done();
  });
});
