import * as http from 'http';
import { HttpError } from 'http-errors';
import * as express from 'express';
import {Request, Response} from 'express';

const hostname : string = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT || '9000')

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) =>{
        res.set('Content-Type', 'application/json')
        res.json()
});

app.on('error', (e: HttpError )=> {
    if(e.code === 'EADDRINUSE') {
        setTimeout(() => {
            console.log(`Restarting the server: http://${hostname}:${port}`)
            app.close()
            startServer()
        }, 3000)
    }
})

function startServer() {
    app.listen(port, hostname, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

startServer()