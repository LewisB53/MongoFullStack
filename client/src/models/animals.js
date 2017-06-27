var Animals = function() {

}

Animals.prototype = {
  makeRequest: function(url, OnRequestComplete) {
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.addEventListener('load', function(){
      if (request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsData = JSON.parse(jsonString);
      OnRequestComplete(resultsData)
    })
    request.send();
  },

  all: function(onAnimalsReady){
    this.makeRequest('http://localhost:3000/api/animals', function (allAnimals){
      onAnimalsReady(allAnimals);
    })
  }
}

module.exports = Animals;
