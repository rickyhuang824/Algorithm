

// O(n2)
function itemInCommon (arry1, arry2) {
    for (let i = 0; arry1.length; i++) {
        for (let j = 0; j < arry2.length; j++) {
            if (arry1[i] === arry2[j]) return true;
        }
    }

    return false;
}


// O(n)
function itemInCommon2(arry1, arry2) {
    const obj = {}
    for (let i = 0; i < arry1.length; i++) {
        obj[arry1[i]] = true
    }

    for (let i = 0; i < arry2.length; i++) {
        if (obj[arry2[i]]) return true;
    }
}

const arry1 = [1,3,5]
const arry2 = [2,4,5]

itemInCommon(arry1, arry2)

