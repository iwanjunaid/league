describe('Scraping all leagues together', function() {
  var results,
    laLiga, premier, serieA, bundesliga;
  var uuid = nodeUuid.v1();
  var event_done_id = null;

  before(function(done) {
    var scraper = new Scraper();

    scraper.on('done', function(id) {
      event_done_id = id;
    });

    scraper.scrape(uuid, [
      {league: 'bundesliga', order: 4},
      {league: 'premier', order: 2},
      {league: 'la-liga', order: 1},
      {league: 'serie-a', order: 3}
    ]).then(function(res) {
      results = res.results;
      laLiga = results[0];
      premier = results[1];
      serieA = results[2];
      bundesliga = results[3];
      done();
    }).catch(function(err) {
      done(err);
    });
  });

  describe('Overall', function() {
    it('should emits event "done" with id ' + uuid, function(done) {
      assert.equal(uuid, event_done_id);
      done();
    });

    it('should returns four leagues result', function(done) {
      assert.equal(4, results.length);
      assert.notEqual(0, results[0].data.length);
      assert.notEqual(0, results[1].data.length);
      assert.notEqual(0, results[2].data.length);
      assert.notEqual(0, results[3].data.length);
      done();
    });
  });

  describe('La Liga', function() {
    it('should has property "league" with value "la-liga"', function(done) {
      assert.equal('la-liga', laLiga.league);
      done();
    });

    it('should has property "order" with value 1', function(done) {
      assert.equal(1, laLiga.order);
      done();
    });

    it('should has "pos", "club", "played", "won", "drawn", "lost", "goalsFor", "goalsAgainst", "goalDifference", "points" properties', function(done) {
      assert.equal(true, laLiga.data[0].hasOwnProperty('pos'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('club'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('played'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('won'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('drawn'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('lost'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('goalsFor'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('goalsAgainst'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('goalDifference'));
      assert.equal(true, laLiga.data[0].hasOwnProperty('points'));
      done();
    });
  });

  describe('Premier', function() {
    it('should has property "league" with value "premier"', function(done) {
      assert.equal('premier', premier.league);
      done();
    });

    it('should has property "order" with value 2', function(done) {
      assert.equal(2, premier.order);
      done();
    });

    it('should has "pos", "club", "played", "won", "drawn", "lost", "goalsFor", "goalsAgainst", "goalDifference", "points" properties', function(done) {
      assert.equal(true, premier.data[0].hasOwnProperty('pos'));
      assert.equal(true, premier.data[0].hasOwnProperty('club'));
      assert.equal(true, premier.data[0].hasOwnProperty('played'));
      assert.equal(true, premier.data[0].hasOwnProperty('won'));
      assert.equal(true, premier.data[0].hasOwnProperty('drawn'));
      assert.equal(true, premier.data[0].hasOwnProperty('lost'));
      assert.equal(true, premier.data[0].hasOwnProperty('goalsFor'));
      assert.equal(true, premier.data[0].hasOwnProperty('goalsAgainst'));
      assert.equal(true, premier.data[0].hasOwnProperty('goalDifference'));
      assert.equal(true, premier.data[0].hasOwnProperty('points'));
      done();
    });
  });

  describe('Serie A', function() {
    it('should has property "league" with value "serie-a"', function(done) {
      assert.equal('serie-a', serieA.league);
      done();
    });

    it('should has property "order" with value 3', function(done) {
      assert.equal(3, serieA.order);
      done();
    });

    it('should has "pos", "club", "played", "won", "drawn", "lost", "goalsFor", "goalsAgainst", "goalDifference", "points" properties', function(done) {
      assert.equal(true, serieA.data[0].hasOwnProperty('pos'));
      assert.equal(true, serieA.data[0].hasOwnProperty('club'));
      assert.equal(true, serieA.data[0].hasOwnProperty('played'));
      assert.equal(true, serieA.data[0].hasOwnProperty('won'));
      assert.equal(true, serieA.data[0].hasOwnProperty('drawn'));
      assert.equal(true, serieA.data[0].hasOwnProperty('lost'));
      assert.equal(true, serieA.data[0].hasOwnProperty('goalsFor'));
      assert.equal(true, serieA.data[0].hasOwnProperty('goalsAgainst'));
      assert.equal(true, serieA.data[0].hasOwnProperty('goalDifference'));
      assert.equal(true, serieA.data[0].hasOwnProperty('points'));
      done();
    });
  });

  describe('Bundesliga', function() {
    it('should has property "league" with value "bundesliga"', function(done) {
      assert.equal('bundesliga', bundesliga.league);
      done();
    });

    it('should has property "order" with value 4', function(done) {
      assert.equal(4, bundesliga.order);
      done();
    });

    it('should has "pos", "club", "played", "won", "drawn", "lost", "goalsFor", "goalsAgainst", "goalDifference", "points" properties', function(done) {
      assert.equal(true, bundesliga.data[0].hasOwnProperty('pos'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('club'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('played'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('won'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('drawn'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('lost'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('goalsFor'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('goalsAgainst'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('goalDifference'));
      assert.equal(true, bundesliga.data[0].hasOwnProperty('points'));
      done();
    });
  });


});
