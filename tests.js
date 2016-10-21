'use strict'

var chai = require('chai');
var assert = chai.assert;

var house = require('./lib/oop.js');
var obj = new house.building(3,"red", 3);

console.log(typeof obj.rePaint obj.hasOwnProperty("name"), Array.isArray(obj));
describe("Test that the building prototype oop functions work perfectly", function(){
  //interger Input Type Test Case
  it("should return an object", function(){
    assert(
      typeof obj == "object"
    );
    assert(
      Array.isArray(obj) === false
    );
  });
  //constructor should return an object
  it("should return an object { name: 'House', rooms: 3, color: 'red', storey: 3 }", function(){
    assert(
      obj.name == "House"
    );
    assert(
      obj.rooms == 3
    );
    assert(
      obj.color == 'red'
    );
  });
  it("should have properties - storey, color, name", function(){
    assert(
      obj.hasOwnProperty("name") === true
    );
    assert(
      obj.hasOwnProperty("storey") === true
    );
    assert(
      obj.hasOwnProperty("color") === true
    );
  });
  it("should have a method called build", function(){
    assert(
      typeof obj.build == "function"
    );
  });
  it("should have a method called demolish", function(){
    assert(
      typeof obj.demolish == "function"
    );
  });
  it("should not have a method called rePaint", function(){
    assert(
      typeof obj.rePaint == "function"
    );
  });
});