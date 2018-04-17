function AirPort() {
  this.hanger = []
  var airportWeather = new Weather
  this.weather = airportWeather.today()

};
AirPort.prototype.land = function(plane) {
  plane.land()
  this.hanger.push(plane);
};
AirPort.prototype.takeoff = function(plane) {
  plane.takeoff()
  var planePosition = this.hanger.indexOf(plane)
  this.hanger.splice(planePosition, 1);
};
