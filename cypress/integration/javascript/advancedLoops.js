
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log('for: ' + arr[i])
}

//forEach recommended to use it for displaying content
arr.forEach(val => { console.log('forEach: ', val) })

//
let arr5 = arr.map(val => val * 5)
console.log(arr5)