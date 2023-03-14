var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:9001/my_db';

MongoClient.connect(url, function (err, db) {

  var cursor = db.collection('People').find();

  cursor.each(function (err, doc) {

  console.log(doc);


  });
});

