const { assert } = require("chai");
var DemoTest = require("../src/demoTest.js");
var myObj = new DemoTest();
var chai = require("chai");
var expect = chai.expect;

describe ("Test Suite 1", function () {
    it("Test the add functionality 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);       
    })

    it("Test the equality functionality 1", function(){
        expect(myObj.add(1,2)).to.be.equal(3);       
    })

})

describe ("Test Suite 2", function () {
    it("Test the add functionality 2", function(){
        expect(myObj.add(1,2)).to.be.equal(3);       
    })

    it("Test the equality functionality 2 ", function(){
        expect(myObj.add(1,2)).to.be.equal(3);       
    })

})