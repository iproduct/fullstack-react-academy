
import React from 'react'
import { CommentModel } from './comment.model'
import { CommentSubmitCallback } from './CommentInput'
import { CommentItem } from './CommentItem'

export interface CommentListProps {
    comments: CommentModel[],
    onEdit: CommentSubmitCallback
}

export const CommentsList: React.FC<CommentListProps> = ({comments, ...props}) => {
    return (
        <div>
            {comments.map(comment => (<CommentItem key={comment.id} {...props} comment={comment} />))}
        </div>
    )
}
