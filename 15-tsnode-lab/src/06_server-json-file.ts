import * as http from 'http';
import { Server } from 'http';
import { HttpError } from 'http-errors';
import * as express from 'express';
import { Request, Response } from 'express';
import MOCK_POSTS from './model/mock-posts';
import { v4 as uuid4 } from 'uuid';
import { Post, IdType } from './model/post';
import { Http2Server } from 'http2';
import * as path from 'path';
import postsRouter from './features/posts/posts-router'
import { ErrorResponse } from './utils/errors/error-response';

const hostname: string = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT || '9000')

const app = express()
let server: Server | undefined
app.use(express.json())

app.locals.db = new Map<IdType, Post>()

const POSTS_FILE = path.join(__dirname, '../posts.json')

app.locals.dbFile = POSTS_FILE

const corsMiddleware = (req: Request, res: Response, next: (error?) => any) => {
    res.setHeader('Access-Control-Allow-Origin', 'localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Max-Age', '3600')
    next()
}

app.use(corsMiddleware)

app.use("/api/posts", postsRouter)

server?.on('error', (e: HttpError) => {
    if (e.code === 'EADDRINUSE') {
        setTimeout(() => {
            console.log(`Restarting the server: http://${hostname}:${port}`)
            server?.close()
            startServer()
        }, 3000)
    }
})

function startServer() {
    server = app.listen(port, hostname, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

app.use((err, req, res, next) => {
    console.log(`Error handling middleware: ${err}`)
    if (err instanceof ErrorResponse) {
        res.status(err.status).json({...err})
    } else {
        next(err)
    }
})

startServer()

