describe('Weather', function(){
  var weather = new Weather();
  var weathers = []
  it('has a random name', function(){
    for (var i = 0; i <= 20; i++) {
    weathers.push(weather.today())
    }
    expect(weathers).toContain('fine' && 'stormy')
  })
})
