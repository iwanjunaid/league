var ExcelJS = require('exceljs'),
  async = require('async'),
  util = require('util'),
  EventEmitter = require('events');

var headers = ['#', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'Goals For', 'Goals Against', 'Goal Difference', 'Points'];

function Excel() {
  EventEmitter.call(this);
};

util.inherits(Excel, EventEmitter);

module.exports = function() {
  return new Excel();
};

function processWorksheet(workbook, data) {
  return new Promise(function(resolve, reject) {
    try {
      var sheet = workbook.addWorksheet(data.scraperInfo.label);
      var rows = data.data;
      var columnsLength = [];

      sheet.mergeCells('A1:J1');
      sheet.getCell('A1').value = data.scraperInfo.label;
      sheet.getCell('A1').alignment = {vertical: 'center', horizontal: 'center'};
      sheet.getRow(2).alignment = {vertical: 'center', horizontal: 'center'};

      sheet.getCell('A2').value = '#';
      sheet.getCell('B2').value = 'Club';
      sheet.getCell('C2').value = 'Played';
      sheet.getCell('D2').value = 'Won';
      sheet.getCell('E2').value = 'Drawn';
      sheet.getCell('F2').value = 'Lost';
      sheet.getCell('G2').value = 'Goals For';
      sheet.getCell('H2').value = 'Goals Against';
      sheet.getCell('I2').value = 'Goal Difference';
      sheet.getCell('J2').value = 'Points';

      async.each(rows, function(row, rowCb) {
        sheet.getCell('A' + (row.pos + 2)).value = row.pos;
        sheet.getCell('B' + (row.pos + 2)).value = row.club;
        sheet.getCell('C' + (row.pos + 2)).value = row.played;
        sheet.getCell('D' + (row.pos + 2)).value = row.won;
        sheet.getCell('E' + (row.pos + 2)).value = row.drawn;
        sheet.getCell('F' + (row.pos + 2)).value = row.lost;
        sheet.getCell('G' + (row.pos + 2)).value = row.goalsFor;
        sheet.getCell('H' + (row.pos + 2)).value = row.goalsAgainst;
        sheet.getCell('I' + (row.pos + 2)).value = row.goalDifference;
        sheet.getCell('J' + (row.pos + 2)).value = row.points;
        rowCb(null);
      }, function(err) {
        if (err)
          return reject(err);

        resolve(null);
      });
    } catch(exception) {
      reject(exception);
    }
  });
}

Excel.prototype.generate = function(data, filename) {
  var self = this;

  return new Promise(function(resolve, reject) {
    var workbook = new ExcelJS.Workbook();

    async.each(data, function(item, dataCb) {
      processWorksheet(workbook, item).then(function(err) {
          dataCb(err);
      });
    }, function(err) {
      if (err)
        return reject(err);

      workbook.xlsx.writeFile(filename).then(function(err) {
        var res = {filename: filename, date: new Date()};
        self.emit('done', res);
        resolve(res);
      });
    });
  });
};
