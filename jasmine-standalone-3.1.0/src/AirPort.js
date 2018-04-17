function AirPort() {
  this.hanger = []

};
AirPort.prototype.land = function(plane) {
  plane.land
  this.hanger.push(plane);
};
AirPort.prototype.takeoff = function(plane) {
  plane.takeoff
  var planePosition = this.hanger.indexOf(plane)
  this.hanger.splice(planePosition, 1);
};
