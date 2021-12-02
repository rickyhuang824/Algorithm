const myArray = [
    11,
    3,
    23,
    7,
]

// these two operations are both O(1), since it does not need to go through every index 
myArray.push(17)
myArray.pop(17)


// these two operations are O(N), since it needs to reindex everything in the array
myArray.shift(11)
myArray.unshift(11)

// [11, 3, 23, 7] => [11, 'Hi', 3, 23, 7] it also needs to reindex
myArray.splice(1, 0, 'Hi')

