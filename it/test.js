describe('pow', function() {

  it('for negative n the result is NaN', function() {
    assert.isNaN(pow(2, -1));
  });

  it('for non-integer n the result is NaN', function() {
    assert.isNaN(pow(2, 1.5));
  });
  
  describe('Checks x in the third power', function() {
    
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the third power is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let i = 0; i < 10; i++) {
      makeTest(i);
    }

  });

  describe('Checks 5 in the x power', function() {
    
      it(`5 to the power of 1 is 5`, function() {
        assert.equal(pow(5, 1), 5);
      });

      it(`5 to the power of 2 is 25`, function() {
        assert.equal(pow(5, 2), 25);
      });

      it(`5 to the power of 3 is 125`, function() {
        assert.equal(pow(5, 3), 125);
      });

  });
});

