function Weather() {
  this.types = ['fine', 'stormy', 'fine', 'fine']

};

Weather.prototype.today = function() {
  return this.types[Math.floor(Math.random() * this.types.length)]
};
