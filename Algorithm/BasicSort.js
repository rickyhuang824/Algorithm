function bubbleSort (array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }

    return array
}

function selectionSort(array) {
    let min = 0
    for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        if ( min != i ) {
            const tmp = array[i]
            array[i] = array[min]
            array[min] = tmp
        }
    }

    return array
}

function insertionSort(array) {
    let tmp
    for (let i = 1; i < array.length; i++) {
        tmp = array[i]
        for (var j = i - 1; array[j] > tmp && j > -1; j--) {
            array[j+1] = array[j]
        }

        array[j+1] = tmp
    }

    return array
}

// Big O of insertionSort:
// 1,2,4,3,5,6 => O(n) but it is not the worst case

const arry = [4,2,6,5,1,3]

insertionSort(arry)


//All these 3 sorting method has loop over loop, so it is O(n2)
// All three of these sort the array in place. That means that they do not create additional copies of the array. That means it the space complexity is O(1)