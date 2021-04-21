const functionsRepo = {
    commonFunctions: {
        sum(a, b) {
            return a + b
        },

        swap(a, b) {
            b = b - a
            a = a + b

            return a, b

        }
    }
}

exports.functionsRepo = functionsRepo;