// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j=0; j<n; j++) {
//             console.log(i, j)
//         }
//     }
// }

// logItems(10)

//
// n * n = n2


function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j=0; j<n; j++) {
            for (let k=0; k<n; k++) {
            console.log(i, j, k)
            }
        }
    }
}

// n * n * n = n3

logItems(10)