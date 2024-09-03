function Vehicle() {}
Vehicle.prototype.drive = function () {
  console.log("Driving a vehicle");
};

function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.drive = function () {
  console.log("Driving a car");
};

var vehicle = new Vehicle();
var car = new Car();

vehicle.drive(); // Driving a Vehicle
car.drive(); // Driving a Car
