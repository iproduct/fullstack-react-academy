
import React from 'react'

type CommentSubmitCallback = (keywords: string) => any

interface SearchProps {
    onsearch: CommentSubmitCallback
}

interface SearchState {
    keywords: string;
    keywords2: string;
}


export const CommentInput = () => {
    return (
        <div>
            
        </div>
    )
}
