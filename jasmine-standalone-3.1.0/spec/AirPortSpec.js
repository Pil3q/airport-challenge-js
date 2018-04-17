describe('AirPort', function(){
  var airport = new AirPort;
  it('should land plane', function(){
    airport.land("plane");
    expect(airport.hanger).toContain("plane")
  })
})
