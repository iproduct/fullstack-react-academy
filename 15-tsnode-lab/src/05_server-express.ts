import * as http from 'http';
import { HttpError } from 'http-errors';

const hostname : string = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT || '9000')

const server = http.createServer((req, res) =>{
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello ')
        res.write('from NodeJS ')
        res.write('and Express')
        res.end("!!!")
    }
});

server.on('error', (e: HttpError )=> {
    if(e.code === 'EADDRINUSE') {
        setTimeout(() => {
            console.log(`Restarting the server: http://${hostname}:${port}`)
            server.close()
            startServer()
        }, 3000)
    }
})

function startServer() {
    server.listen(port, hostname, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

startServer()