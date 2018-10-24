const fetch = require('node-fetch');

var billboard = require("billboard-top-100").getChart;

var listCharts = require('billboard-top-100').listCharts;

// listCharts(function(err, data) {
// 	if (err) console.log(err);
// 	console.log(data); // prints array of all charts
// });

let listSongs = (query, date) => {
  billboard(query, date, function(err, songs) {
    if (err) console.log(err);
    console.log(songs); //prints array of top 100 songs
    })
}

module.exports = { listSongs, listCharts };
