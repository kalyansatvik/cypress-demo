var a = 10
var b = 20
console.log('Value a before swap: ' + a)
console.log('Value b before swap: ' + b)
swap(a, b)

function swap(a, b) {
    let temp = a
    a = b
    b = temp
    console.log('Value a after swap: ' + a)
    console.log('Value b after swap: ' + b)
}