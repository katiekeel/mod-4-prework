const assert = require('chai').assert
const insertionSort = require('../insertionSort')

describe("Insertion sort method", function() {
  context("when given an unsorted array", function() {
    it("returns that array ordered from smallest to largest", function() {

      var numArray = [3, 4, 7, 2, 1]

      var sortedArray = []

      sortedArray.push(numArray.shift())

      assert.equal(insertionSort(numArray, sortedArray), [1,2,3,4,7]);
    })
  })
});
