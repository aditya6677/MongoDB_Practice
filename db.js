var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydb");
  dbo.createCollection("data", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    });
    db.close;
});