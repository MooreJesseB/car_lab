var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  var myArr;
  describe('#max', function(){
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  });
  describe('#min', function(){
    beforeEach(function() {
      myArr = [23, 43, 3, -5, 14];
    })
    it('should return the minimum in an array', function(){
      expect(Iterators.min(myArr)).to.equal(-5);
    })
    it('should return Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
  describe('each', function(){
    beforeEach(function(){
      myArr = [1, 2, 3, 4, 5];
    })
    it('it should return myArr', function() {
      expect(Iterators.each(myArr, function(){
      })).to.equal(myArr);
    })
  });
  describe('map', function(){
    beforeEach(function(){
      myArr = [1,2,3,4];
    })
    it('should return a morphed array', function() {
      expect(Iterators.map(myArr, function(value){
        return value * 3;
      })).to.deep.equal([3,6,9,12]);
    })
  });
  describe('filter', function(){
    beforeEach(function(){
      myArr = [1,2,3,4,5,6];
    })
    it('should return a filtered array', function() {
      expect(Iterators.filter(myArr, function(value){
        if (value > 2)
          return value;
      })).to.deep.equal([3,4,5,6]);
    })
  });
  describe('reduce', function(){
    beforeEach(function(){
      myArr = [1,2,3,4,5];
    })
    it('should return the sum of all elements in the array', function() {
      expect(Iterators.reduce(myArr, function(total, value){
        return total + value;
      }))
    })
  });

})