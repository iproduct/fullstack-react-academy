import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'
import BookItem from './BookItem'

export interface BooksProps {
    books: Item[]
    onFavourite(add: boolean): any;
}

const Books: React.FC<BooksProps> = ({ books, ...rest }: BooksProps) => {
    return (
        <ul>
            {books.map(book => (<BookItem key={book.id} book={book} {...rest} />))}
        </ul>
    )
}

Books.propTypes = {
    books:  PropTypes.array.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default Books


