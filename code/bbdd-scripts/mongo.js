const mongo = require('nexo-npm-node-mongo'); 
const logger = require('nexo-npm-node-logger'); 

mongo.url("localhost:9001");
console.log("mi_mongo", mongo) 
mongo.credentials("admin", "admin"); 

mongo.onConnected(async () => { logger.i("Connected to the database"); }); 
mongo.onFailure((err) => { logger.e("Unable to connect to the database", err) }); 
mongo.initialize();
mongo.schema("my_db"); 
module.exports = mongo;