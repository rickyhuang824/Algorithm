

// Helper function merge
function merge (array1, array2) {
    let combined = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }

    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }

    return combined
}

function mergeSort(array) {
    //base case
    if (array.length === 1) return array

    // breaks array in half
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))

}

merge([1,3,7,8], [2,4,5,6])
mergeSort([5,4,7,1,3,2,8])

// space complexity O(n) ps: because if you have an array with eight items, you will have to break it into 8 different array
// time complexity: when you break down 8 items into individual array, it takes 3 steps, which is O(log n), and when you put it together, you have to loop through each breaked down array, so it is O(n), so total is O(n log n)