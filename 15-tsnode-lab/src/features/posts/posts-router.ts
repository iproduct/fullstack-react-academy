import { ErrorResponse } from './../../utils/errors/error-response';
import { readJsonFile, writeJsonFile } from './../../utils/file-utils';
import { Router } from "express";
import { Request, Response } from 'express';
import { Post } from '../../model/post';
import { v4 as uuid4 } from 'uuid';
import { getPositionOfLineAndCharacter } from 'typescript';

const router = Router()



router.get('/', async (req: Request, res: Response) => {
    const posts  = await readJsonFile(req.app.locals.dbFile) as Post[]
    res.json(posts)
})

router.get('/:id', async (req: Request, res: Response) => {
    const posts  = await readJsonFile(req.app.locals.dbFile) as Post[]
    res.json(posts.find(post => post.id === req.params['id']))
})

router.post('/', async (req: Request, res: Response) => {
    const newPost = req.body as Post
    newPost.id = uuid4()
    const posts = await readJsonFile(req.app.locals.dbFile) as Post[]
    posts.push(newPost)
    writeJsonFile(req.app.locals.dbFile, posts)
    res.status(201).location(`/api/posts/${newPost.id}`).json(newPost)
});

router.put('/:id', (req: Request, res: Response, next: (err: Error)=>any ) => {
    const post = req.body as Post
    const id = req.params['id']
    if (post.id !== id) {
        return next(new ErrorResponse(400, `Post URL ID='${id}' is different from post body ID='${post.id}'`))
    }

    (readJsonFile(req.app.locals.dbFile) as Promise<Post[]>).then(posts => {
        const index = posts.findIndex(p => p.id = id)
        posts[index] = post
        writeJsonFile(req.app.locals.dbFile, posts)
        res.json(post)
    })
});

export default router;