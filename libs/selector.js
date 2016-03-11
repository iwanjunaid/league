function Selector() {}

module.exports = function() {
  return new Selector();
};

Selector.prototype.getScraper = function(scraperName) {
  if (scraperName === 'premier')
    return require('league-premier')();
  else if (scraperName === 'la-liga')
    return require('league-la-liga')();
  else if (scraperName === 'serie-a')
    return require('league-serie-a')();
  else if (scraperName === 'bundesliga')
    return require('league-bundesliga')();
  else
    return undefined;
};
