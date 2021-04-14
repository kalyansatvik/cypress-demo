var a = 10
var b = 20
console.log('Value a before swap: ' + a)
console.log('Value b before swap: ' + b)
let sum = swap(a, b)
console.log('sum: ' + sum)

// function swap(a, b) {
//     let temp = a
//     a = b
//     b = temp
//     console.log('Value a after swap: ' + a)
//     console.log('Value b after swap: ' + b)
// }

function swap(a, b) {
    b = b - a
    a = a + b

    console.log('Value a after swap: ' + a)
    console.log('Value b after swap: ' + b)
    return a + b
}