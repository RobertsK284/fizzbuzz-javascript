describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 15', function () {
    it("Returns fizzbuzz when number is 15", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it("Returns fizzbuzz when number is divisible by 15", function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });

  });

  describe('multiples of 3', function () {
    it("Returns fizz when number is 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it("Returns fizz when number is divisible by 3", function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function () {
    it("Returns buzz when number is 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it("Returns buzz when number is divisible by 5", function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });


});
