const expect = chai.expect
// const myFunc = require('../js/index.js');


var calculator={
add: function(a,b){
  return a+b
}

};


var a=5;
// var b=5;
var b=0

describe('calculator', function () {
  it('is an object', function () {
    expect(calculator).to.be.a('object')
  })



  describe('#add', function () {
    it('should be a function', function () {
      expect(calculator.add).to.be.a('function')
    })

    it('should add two numbers together', function () {
      expect(calculator.add(10,20)).to.equal(30)
    })
  })
})

describe('add',function(){
  it('adds two numbers', function(){
    expect(add(a,b)).to.equal(5)
  })
})

describe('subtract',function(){
  it('subtracts two numbers', function(){
    expect(subtract(5,1)).to.equal(4)
  })
})

describe('multiplication',function(){
  it('multiplies numbers', function(){
    expect(multiplication(12,5)).to.equal(60)
  })
})

describe('division',function(){
  it('divides numbers', function(){
    expect(division(10,5)).to.equal(2)
  })
})









describe('divError',function(){
  it('returns true if error', function(){
    expect(divError(b)).to.equal(true)
  })
})
