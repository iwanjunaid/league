describe('Scraping Bundesliga', function() {
  var results = null;
  var uuid = nodeUuid.v1();
  var event_done_id = null;

  before(function(done) {
    var scraper = new Scraper();

    scraper.on('done', function(id) {
      event_done_id = id;
    });

    scraper.scrape(uuid, [{
      league: 'bundesliga',
      order: 1
    }]).then(function(res) {
      results = res.results;
      done();
    }).catch(function(err) {
      done(err);
    });
  });

  it('should emits event "done" with id ' + uuid, function(done) {
    assert.equal(uuid, event_done_id);
    done();
  });

  it('should returns one league result', function(done) {
    assert.equal(1, results.length);
    assert.notEqual(0, results[0].data.length);
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
