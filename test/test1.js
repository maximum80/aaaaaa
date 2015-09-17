var assert = require("chai").assert;
var codecheck = require("codecheck");

function doTest(kind, arg, expected, done) {
  var app = codecheck.consoleApp("./a.out");
  app.expected("" + expected);
  app.runAndVerify([kind, arg], function(result) {
    assert(result.succeed, result.getMessage());
    done();
  });
}

describe("isPrime", function() {

  it("1 is not prime", function(done) {
    doTest(1, 1, 0, done);
  });
  it("2 is prime", function(done) {
    doTest(1, 2, 1, done);
  });

  it("3 is prime", function(done) {
    doTest(1, 3, 1, done);
  });

  it("4 is not prime", function(done) {
    doTest(1, 4, 0, done);
  });

  it("5 is prime", function(done) {
    doTest(1, 5, 1, done);
  });

  it("6 is not prime", function(done) {
    doTest(1, 6, 0, done);
  });

  it("7 is prime", function(done) {
    doTest(1, 7, 1, done);
  });

  it("8 is not prime", function(done) {
    doTest(1, 8, 0, done);
  });

  it("9 is not prime", function(done) {
    doTest(1, 9, 0, done);
  });

  it("10 is not prime", function(done) {
    doTest(1, 10, 0, done);
  });

  it("11 is prime", function(done) {
    doTest(1, 11, 1, done);
  });

  it("12 is not prime", function(done) {
    doTest(1, 12, 0, done);
  });

  it("13 is prime", function(done) {
    doTest(1, 13, 1, done);
  });

  it("14 is not prime", function(done) {
    doTest(1, 14, 0, done);
  });

  it("15 is not prime", function(done) {
    doTest(1, 15, 0, done);
  });

  it("16 is not prime", function(done) {
    doTest(1, 16, 0, done);
  });

  it("17 is prime", function(done) {
    doTest(1, 17, 1, done);
  });

  it("18 is not prime", function(done) {
    doTest(1, 18, 0, done);
  });

  it("19 is prime", function(done) {
    doTest(1, 19, 1, done);
  });

  it("20 is not prime", function(done) {
    doTest(1, 20, 0, done);
  });
});

describe("primeSeq", function() {
  it("1 to 20", function(done) {
    var cnt = 0;
    var expected = [2,3,5,7,1,1,1,3,1,7,1,9,2,3,2,9,3,1,3,7];
    for (var i=0; i<20; i++) {
      doTest(2, i + 1, expected[i], function() {
        cnt++;
        if (cnt === 20) {
          done();
        }
      });
    }
  });
});
