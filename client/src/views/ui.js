var Animals = require('../models/animals');

var UI = function() {
  var animals = new Animals();
  animals.all(function(allAnimals){
    this.render(allAnimals)  
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },


  render: function(animals) {
    var container = document.getElementById("animals");
console.log (animals)
    for(var animal of animals) {
      var li = document.createElement("li");
      this.appendText(li, animal.name, "animal: ");
      this.appendText(li, animal.type, "type: ");

      container.appendChild(li);
    }
  }
}

module.exports = UI;