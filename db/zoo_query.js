var MongoClient = require('mongodb').MongoClient;

var ZooQuery = function(){
  this.url = 'mongodb://localhost:27017/ratings_site'
}

ZooQuery.prototype = {
  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){      //if no error, first param is null
      if(err) return;
      var collection = db.collection('zoo')
      collection.find().toArray(function (err, docs){     // toArray converts Bson back to Js
        if(err) return;
        onQueryFinished(docs)   //  this passes procesesed docs back to all funtion rather than up one level - toArray method
      }) 
    })
  }
}

module.exports = ZooQuery;