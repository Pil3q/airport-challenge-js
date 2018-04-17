function AirPort() {
  this.hanger = []
  var airportWeather = new Weather
  this.weather = airportWeather.today()
  this.capacity = 5

};
AirPort.prototype.land = function(plane) {
  if (this.stormy() === true)
    throw new Error("the weather is stormy, cant land")
  else if (this.full() === true)
    throw new Error("airport is full, cant land")
  else
    plane.land()
    this.hanger.push(plane);

};
AirPort.prototype.takeoff = function(plane) {
  if (this.stormy() === true)
    throw new Error("the weather is stormy, cant take off")
  else if (this.full() === true)
    throw new Error("airport is full, cant take off")
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

AirPort.prototype.full = function() {
  if (this.hanger.length >= this.capacity)
    return true
    else
      return false
};

AirPort.prototype.setcapacity = function(capacity) {
  this.capacity = capacity
}