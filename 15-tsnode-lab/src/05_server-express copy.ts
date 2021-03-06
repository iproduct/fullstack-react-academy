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

const hostname: string = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT || '9000')

const app = express()
let server: Server | undefined
app.use(express.json())

app.locals.db = new Map<IdType, Post>()

MOCK_POSTS.map(post => {
    post.id = uuid4();
    return post;
}).forEach(post => app.locals.db.set(post.id, post))

app.use("/", express.static(path.join(__dirname, "../public")))

app.get("/users/:userId/comments/:fromId-:toId", (req: Request, res: Response) => {
    res.json(req.params)
})

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use("/pages", requestTime)

app.get('/pages/page1', function (req, res) {
    var responseText = 'Page1<br>'
    responseText += '<small>Requested at: ' + req['requestTime'] + '</small>'
    res.send(responseText)
})
app.get('/pages/page2', function (req, res) {
    var responseText = 'Page2<br>'
    responseText += '<small>Requested at: ' + req['requestTime'] + '</small>'
    res.send(responseText)
})

app.get('/api/posts', (req: Request, res: Response) => {
    res.set('Content-Type', 'application/json')
    res.json(Array.from(app.locals.db.values()))
});

app.post('/api/posts', (req: Request, res: Response) => {
    const newPost = req.body as Post
    newPost.id = uuid4()
    req.app.locals.db = req.app.locals.db.set(newPost.id, newPost)
    res.set('Content-Type', 'application/json')
    res.status(201).location(`/api/posts/${newPost.id}`).json(newPost)
});


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

startServer()

