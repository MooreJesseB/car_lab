// something is broken here.  I can require the Car constructor in Node, but when I attempt to make a new iteration
// I get an error that Car is not defined.  This is preventing me from running tests as well.

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "manufacturer";

  this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = "on";
};

Car.prototype.off = function() {
  this.state = "off";
};

Car.prototype.driveTo = function(destination) {
  if (this.state === "on") {
    var result = "driving to " + destination;
    return result;
    console.log(result); 
  }
};

Car.prototype.park = function() {
  if (this.state === "off") {
    var result = "Parked!";
    return result;
    console.log(result);
  }
};

Car.prototype.pickUp = function(name) {
  if (this.state === "on") {
    console.log("driving to pick up", name);
    this.passengers.push(name);
  }
};

Car.prototype.dropOff = function(name) {
  if (this.state === 'off') {
    return;
  }
  // too tired to write and test a contains HOF right now
  for (var i = 0; i < this.passengers.length; i++) {
    if (this.passengers[i] === name) {
      this.passengers.splice(i, 1);
    }
  };
}

//var banana = new Car("MINI", "Cooper S Hardtop", 2009, "blue and white")

if (module !== undefined && module.exports) {
  module.exports = Car;
}