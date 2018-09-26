var net = require('net')

function formatDate (i) {
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
    // "YYYY-MM-DD hh:mm"
    var date = new Date()
    socket.end(date.getFullYear()+ '-'
                + formatDate(date.getMonth() + 1) + '-'
                + formatDate(date.getDate()) + ' '
                + formatDate(date.getHours()) + ':'
                + formatDate(date.getMinutes())
                + '\n')
})
server.listen(Number(process.argv[2]))
