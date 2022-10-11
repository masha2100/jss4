describe("pow", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
  });

  ///////////
  describe("pound", function() {

    it("перевод кг в фунт", function() {
      assert.equal(pound(1), 2.205);
      assert.equal(pound(2), 4.40925);
    });
  
  });