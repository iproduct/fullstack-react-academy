import { CommentModel, IdType, Identifiable } from './comment.model';
import { findAllInRenderedTree } from "react-dom/test-utils";

export const BASE_URL = 'http://localhost:9000/comments';

export interface CommentApiClient {
    findAllComments(): Promise<CommentModel[]>;
    findCommentById(id: IdType): Promise<CommentModel>;
    findCommentFilter(keywords: string): Promise<CommentModel[]>;
    createComment(comment: CommentModel): Promise<CommentModel>;
    updateComment(comment: CommentModel): Promise<CommentModel>;
    deleteCommentById(id: IdType): Promise<CommentModel>;
}

async function processResponse<T>(respPromise: Promise<Response>, id : IdType = undefined): Promise<T> {
    try {
        const resp = await respPromise
        if (resp.ok) {
            return await resp.json() as T
        } else if (resp.status === 404) {
            throw new Error(id ? `Comment with ID = ${id} is not found.`: `Endpoint not found: ${(await respPromise).url}`)
        } else {
            throw new Error(`Error fetching entities: ${resp.status}: ${resp.statusText}`)
        }
    } catch(err: any) {
        throw new Error(`Error fetching entities: ${err.message}`)
    }
}

class CommentApiClientImpl implements CommentApiClient {
    async findAllComments(): Promise<CommentModel[]> {
        return processResponse(fetch(BASE_URL));
    }

    async findCommentById(id: IdType): Promise<CommentModel> {
        return processResponse(fetch(`${BASE_URL}/${id}`));
    }

    findCommentFilter(keywords: string): Promise<CommentModel[]> {
        return processResponse(fetch(`${BASE_URL}?q=${keywords}`));
    }
    createComment(comment: CommentModel): Promise<CommentModel> {
        return processResponse(fetch(BASE_URL,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        }));
    }
    updateComment(comment: CommentModel): Promise<CommentModel> {
        return processResponse(fetch(`${BASE_URL}/${comment.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        }));
    }
    deleteCommentById(id: IdType): Promise<CommentModel> {
        return processResponse(fetch(`${BASE_URL}/${id}`,{
            method: 'DELETE',
        }));
    }
}

export const CommentsApi: CommentApiClient = new CommentApiClientImpl()