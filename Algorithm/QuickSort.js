const swap = (array, firstIndex, secondIndex) => {
    let tmp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = tmp
}

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }

    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }

    return array
}

myArray = [4,6,1,7,3,2,5]
// pivot = (array)
quickSort(myArray)


//space complexity O(1)
// time complexity: O(n log n) best case, worst case is that it is already a sorted array, since there is no splitting, it is O(n2)
// so it is not a good sort algorithm for sorted or almost sorted array