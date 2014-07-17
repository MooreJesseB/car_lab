var expect = require('chai').expect,
  carClass = require('../src/carLab.js').Car;

// can't get this to work at all.  It keeps telling me that Car is not defined.  very confused.
describe('Car', function() {
  banana = new carClass.Car("MINI");
  it('should be a new car instance'), function() {
    expect(sadie.make.to.equal("MINI"));
  }
});