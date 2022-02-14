const express = require('express');
var mysql = require('mysql');

var alldata , lat;
var hasil = [];

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "maps_data"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT longitude, latitude, brand, '2021-10-20 07:00:00 to 2021-10-20 08:00:00' AS `range`, SUM(user_count) as user_per_brand, (select SUM(user_count) from titik_keramaian tk1 where tk1.longitude = tk.longitude) as total_user FROM titik_keramaian tk where time BETWEEN '2021-10-20 07:00:00' and '2021-10-20 08:00:00' GROUP BY longitude, brand ORDER BY id", function (err, result, fields) {
    if (err) throw err;
    alldata = result;

  });

  con.query("SELECT latitude , longitude FROM titik_keramaian WHERE time BETWEEN '2021-10-20 07:00:00' AND '2021-10-20 08:00:00' GROUP BY latitude,longitude", function (err, result, fields) {
    if (err) throw err;
    lat=result;
    
    lat.forEach(lat => {
      var data= [];
      var count,time;
      alldata.forEach(src => {
        if(src.latitude == lat.latitude && src.longitude == lat.longitude){
          data.push(src);
          count = src.total_user;
          time = src.range;
        }
      })

      hasil2 = {
        'latitude' : lat.latitude,
        'longitude' : lat.longitude,
        'data' : data,
        'count' : count,
        'time' : time
      }
      hasil.push(hasil2);

    })

  });
});

const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/get_data', (req, res) => {
    res.send({
        message: 'Success Get Data',
        data: hasil
    });
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});