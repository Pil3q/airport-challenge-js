describe('AirPlane', function(){

  it('should be inair as false by default', function(){
    var plane = new AirPlane;
    expect(plane.inair.toEqual(false)
  })
})
