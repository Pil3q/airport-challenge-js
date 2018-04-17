function AirPlane() {
  this.inair = false;
};

AirPlane.prototype.takeoff = function() {
  this.inair =  true;
};

AirPlane.prototype.land = function() {
  this.inair = false;
};
