
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { CommentModel, CommentStatus } from './comment.model'
import './CommentInput.css'

export type CommentSubmitCallback = (comment: CommentModel) => any

interface CommentInputProps {
    onSubmit: CommentSubmitCallback
    editedComment: CommentModel
}

interface CommentInputState {
    keywords: string;
    editedComment: CommentModel;
}


export const CommentInput: React.FC<CommentInputProps> = ({ editedComment, onSubmit }) => {
    const [comment, setComment] = useState<CommentModel>(editedComment)
    function submitComment(ev: FormEvent) {
        ev.preventDefault();

        if (!comment.id) {
            comment.id = Date.now();
            comment.created = Date.now();
            comment.status = CommentStatus.ACTIVE
        }
        comment.modified = Date.now();

        onSubmit({...comment})
    }
    function commentChanged(ev: ChangeEvent<HTMLInputElement>) {
        setComment(oldComment => ({
            ...oldComment, 
            [ev.target.name]: ev.target.value
        }));
    }
    return (
        <div className="CommentInput-wrapper">
            <h3>Add / Edit Comment</h3>
            <form onSubmit={submitComment} >
                <input placeholder="ID" type="number" name="id" readOnly={true} value={comment.id} />
                <input placeholder="Enter comment title" type="text" name="title" onChange={commentChanged}
                    value={comment.title} />
                <input placeholder="Enter comment content" type="text" name="content" onChange={commentChanged}
                    value={comment.content} />
                <button className="btn waves-effect waves-light" type="submit">Submit
                    <i className="material-icons right">send</i> Submit
                </button>
            </form>
        </div>
    )
}
