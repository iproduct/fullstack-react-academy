
import React from 'react'
import { CommentModel } from './comment.model'
import { CommentItem } from './CommentItem'

export interface CommentListProps {
    comments: CommentModel[]
}

export const CommentsList: React.FC<CommentListProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => (<CommentItem comment={comment} />))}
        </div>
    )
}
