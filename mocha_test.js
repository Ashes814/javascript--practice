"use strict"

describe("pow", function () {
    beforeEach(() => alert("Testing started - before all tests"));
    

    describe("raises x to power 3", function() {
        function makeTest(x) {
            let expected = x * x * x
            it(`${x}**3=${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
    
        }
    
        for (let x = 1; x <= 10; x++) {
            makeTest(x);
        }
    
        // it('2**4=16', function() {
        //     assert.equal(pow(2, 4), 16)
        // });
    });

    describe("raises x to power 4", function() {
        function makeTest(x) {
            let expected = x * x * x * x
            it(`${x}**4=${expected}`, function() {
                assert.equal(pow(x, 4), expected);
            });
    
        }
    
        for (let x = 1; x <= 10; x++) {
            makeTest(x);
        }
    
        // it('2**4=16', function() {
        //     assert.equal(pow(2, 4), 16)
        // });
    });

    afterEach(() => alert("Testing finished - after all tests"));

});