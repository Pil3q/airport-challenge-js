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
})
