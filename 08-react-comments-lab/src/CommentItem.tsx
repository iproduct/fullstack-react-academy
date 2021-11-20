
import React from 'react'
import { CommentModel } from './comment.model'

export interface CommentItemProps {
    comment: CommentModel
}

export const CommenItem: React.FC<CommentItemProps> = ({comment}) => {
    return (
        <div className="BookItem-card card col s12 m6 xl4">
            <div className="BookItem-card-content">
                <div className="BookItem-thumbnail-container">
                    <img className="BookItem-thumbnail activator responsive-img" alt="book thumbnail"
                        src={"images/book-cover-placeholder.png"} />
                </div>
                <span className="BookItem-card-title activator grey-text text-darken-4">
                    <i className="material-icons right">more_vert</i>
                    <h3>{comment.title}</h3>
                    <h4>Created: {comment.created}, Modified: {comment.modified}</h4>
                </span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <h3>{comment.title}</h3>
                <h4>Created: {comment.created}, Modified: {comment.modified}</h4>
                <p>{comment.content}</p>
            </div>
            <div className="card-action">
                <button className="btn waves-effect waves-light right" type="button" >Add to Favs</button>)
            </div>
        </div>
    )
}
