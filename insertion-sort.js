function insertionSort(numArray, sortedArray) {
  while (numArray.length > 0) {
    insertIndex = 0
    currentValue = numArray.shift()
    sortedArray.forEach(function(value, index) {
      if (currentValue < value) {
        insertIndex = index
      } else {
        insertIndex += 1
        return
      }
    })
    sortedArray.splice(insertIndex, 0, currentValue)
  }
  return sortedArray
};

module.exports = insertionSort
