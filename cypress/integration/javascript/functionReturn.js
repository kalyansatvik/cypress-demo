//return - returns the value
// function square(n){
//     return n*n;
// }
// console.log(square(2))

//return stops the execution
// function square(n) {
//     return n * n;
//     console.log('after return')
// }
// console.log(square(2))

//break and return are same
// for (let i = 0; i <= 10; i++) {
//     if (i === 3) {
//         break;
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 3) {
//         return;
//     } else {
//         console.log(i)
//     }
// }

//there is an exception where we can print or execute values after return

// function tryFinally() {
//     try {
//         for (let i = 0; i <= 10; i++) {
//             if (i === 3) {
//                 return;
//             } else {
//                 console.log(i)
//             }
//         }

//     } finally {
//         return 'finally block executed after return'
//     }
// }

// console.log(tryFinally())