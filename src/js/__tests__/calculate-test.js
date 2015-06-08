jest.dontMock('../calculate');

describe('calculate sum', function() {
  it('it should calculate the sum of 1+2=3', function() {
    var cal = require('../calculate');
    expect(cal.add(1,2)).toBe(3);
  });
  it('it should calculate the sum of 2+3=5', function() {
    var cal = require('../calculate');
    expect(cal.add(20,31)).toBe(51);
  });
});

describe('calculate substraction', function() {
  it('it should calculate the sum of 1-2=-1', function() {
    var cal = require('../calculate');
    expect(cal.sub(1,2)).toBe(-1);
  });
  it('it should calculate the abstraction of 5-2=3', function() {
    var cal = require('../calculate');
    expect(cal.sub(5,2)).toBe(3);
  });
});
