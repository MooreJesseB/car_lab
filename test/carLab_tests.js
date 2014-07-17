var expect = require('chai').expect;
var Car = require('../src/carLab.js');

// can't get this to work at all.  It keeps telling me that Car is not defined.  very confused.
describe('Car', function() {

    describe('#sale', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.sale("Jesse");
      it('should expect current owner to be Jesse', function() {
        expect(banana.currentOwner).to.eql('Jesse');
      })
      it('should expect previous owner to include', function() {
        expect(banana.previousOwners[0]).to.eql('manufacturer');
      })
    });

    describe('#paint', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.paint("black");
      it('should expect color to be black', function() {
        expect(banana.color).to.eql('black');
      });
    });

    describe('#start', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.start();
      it('should expect car to be on', function() {
        expect(banana.state).to.eql('on');
      })
    });
    describe('#off', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.off();
      it('should expect car to be off', function() {
        expect(banana.state).to.eql('off');
      })
    });
    // describe('#driveTo', function() {
    //   var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
    //   it('should expect car to be on', function() {
    //     expect(banana.driveTo("Berkeley")).to.return('driving to Berkeley');
    //   })
    // });
    // describe('#park', function() {
    //   var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
    //   banana.start();
    //   it('should expect car to be on', function() {
    //     expect(banana.state).to.eql('on');
    //   })
    // });
    describe('#pickup', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.start();
      banana.pickUp('Mango');
      it('should expect passengers to include new passenger', function() {
        expect(banana.passengers[0]).to.eql('Mango');
      })
    });
    describe('#dropOff', function() {
      var banana = new Car("MINI","Cooper S Hardtop", 2009, "blue");
      banana.start();
      banana.pickUp('Mango');
      banana.dropOff('Mango');
      it('should expect passengers to be an empty array', function() {
        expect(banana.passengers).to.eql([]);
      })
    });
});