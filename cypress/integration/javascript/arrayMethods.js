let numbers = [20, 30, 40, 50]

// console.log(numbers)
// console.log(numbers.push(60))
// console.log(numbers)

// console.log(numbers.unshift(10))
// console.log(numbers)

//start, deleteCount, newele1, newele2...
// console.log(numbers.splice(2, 0, 33, 36, 39))
// console.log(numbers)

// console.log(numbers.splice(2, 1, 33, 36, 39))
// console.log(numbers)

// console.log(numbers.pop())
// console.log(numbers)

// console.log(numbers.shift())
// console.log(numbers)

// let arr1 = [1, 2]
// let arr2 = [3, 4]
// let arr3 = [5, 6, 7]

// let arr = arr1.concat(arr2, arr3)
// console.log(arr)

let employees = [
    { id: 101, name: 'james', age: 34, deptid: 201 },
    { id: 102, name: 'jack', age: 24, deptid: 202 },
    { id: 103, name: 'johnny', age: 27, deptid: 203 },
    { id: 104, name: 'jimmy', age: 23, deptid: 204 }
]

//some or every
//console.log(employees.some(emp => emp.age > 23))
//console.log(employees.some(emp => emp.age > 34))

//console.log(employees.every(emp => emp.age > 20))
//console.log(employees.every(emp => emp.age > 27))

//filter
// let dept203 = employees.filter(emp => emp.deptid == 203)
// console.log(dept203)

// let ul = [3, 2, 1, 5, 7, 6]
// let ul_str = ['rat', 'bat', 'cat']

//console.log(ul.sort())
//console.log(ul_str.sort())
console.log(employees.join('|'))

