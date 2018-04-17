function AirPort() {
  this.hanger = []

};
AirPort.prototype.land = function(plane) {
  this.hanger.push(plane);
};
