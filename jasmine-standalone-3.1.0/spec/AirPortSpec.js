describe('AirPort', function(){
  var airport = new AirPort();
  var plane = new AirPlane();

  it('should land plane', function(){
    spyOn(airport, "stormy").and.returnValue(false);
    airport.land(plane);
    expect(airport.hanger).toContain(plane)
  })

  it('should takeoff plane', function(){
    spyOn(airport, "stormy").and.returnValue(false);
    airport.takeoff(plane);
    expect(airport.hanger).not.toContain(plane)
  })

  it ('stubs the weather to stormy and expects error when landing', function() {
    var stormyAirport = new AirPort();
    spyOn(stormyAirport, "stormy").and.returnValue(true);
    expect( function(){ stormyAirport.land(plane); } ).toThrow(new Error("the weather is stormy, cant land"));
  })

  it ('stubs the weather to stormy and expects error when taking off', function() {
    var stormyAirport = new AirPort();
    spyOn(stormyAirport, "stormy").and.returnValue(true);
    expect( function(){ stormyAirport.takeoff(plane); } ).toThrow(new Error("the weather is stormy, cant take off"));
  })

  it ('prevents landing in a full airport', function() {
    var fullAirport = new AirPort();
    spyOn(fullAirport, "stormy").and.returnValue(false);
    spyOn(fullAirport, "full").and.returnValue(true);
    expect( function(){ fullAirport.land(plane); } ).toThrow(new Error("airport is full, cant land"));
  })

  it ('prevents taking off in a full airport', function() {
    var fullAirport = new AirPort();
    spyOn(fullAirport, "stormy").and.returnValue(false);
    spyOn(fullAirport, "full").and.returnValue(true);
    expect( function(){ fullAirport.takeoff(plane); } ).toThrow(new Error("airport is full, cant take off"));
  })

  it ('sets a new capacity', function() {
    airport.setcapacity(10);
    expect(airport.capacity).toEqual(10);
  })

})