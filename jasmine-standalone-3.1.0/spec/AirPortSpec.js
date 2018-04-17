describe('AirPort', function(){
  var airport = new AirPort();
  var plane = new AirPlane();
  it('should land plane', function(){
    airport.land(plane);
    expect(airport.hanger).toContain(plane)
  })
  it('should takeoff plane', function(){
    airport.takeoff(plane);
    expect(airport.hanger).not.toContain(plane)
  })
  it('has a weather', function(){
    expect(airport.weather).toContain('fine' || 'stormy')
  })
  it('hrespond to stormy with random  true/false', function(){
    var result = []
    for (var i = 0; i <= 20; i++) {
    result.push(airport.stormy())
    }
    expect(result).toContain(true && false)
  })
})
