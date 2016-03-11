describe('Scraping all leagues together', function() {
  var results,
    laLiga, premier, serieA, bundesliga;

  before(function(done) {
    scraper.scrape([
      {league: 'bundesliga', order: 4},
      {league: 'premier', order: 2},
      {league: 'la-liga', order: 1},
      {league: 'serie-a', order: 3}
    ]).then(function(res) {
      results = res;
      laLiga = results[0];
      premier = results[1];
      serieA = results[2];
      bundesliga = results[3];
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

    it('should has property "order" with value 1', function(done) {
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

    it('should has property "order" with value 1', function(done) {
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

    it('should has property "order" with value 1', function(done) {
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
