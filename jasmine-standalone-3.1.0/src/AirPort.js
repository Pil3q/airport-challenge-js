function AirPort() {
  this.hanger = []
  var airportWeather = new Weather
  this.weather = airportWeather.today()

};
AirPort.prototype.land = function(plane) {
  if (this.stormy() === true)
    throw new Error(["It is Stormy!"])
  else
  plane.land()
  this.hanger.push(plane);
};
AirPort.prototype.takeoff = function(plane) {
  if (this.stormy() === true)
    throw new Error(["It is Stormy!"])
  else
  plane.takeoff()
  var planePosition = this.hanger.indexOf(plane)
  this.hanger.splice(planePosition, 1);
};
AirPort.prototype.stormy = function() {
  if (this.weather === 'stormy')
    return true
  else
    return false
};
