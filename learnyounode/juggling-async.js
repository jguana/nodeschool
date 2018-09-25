const bl = require('bl')
const http = require('http')
const results = []
let count = 0

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2+index], function (res) {
        res.pipe(bl(function (err, data) {
            if (err) {
                console.error(err)
            // ? or console.error
            }

            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (i=0; i<3; i++) {
    httpGet(i)
}
