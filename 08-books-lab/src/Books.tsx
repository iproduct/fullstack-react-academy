import React from 'react'
// import PropTypes from 'prop-types'
import { Item } from './book-models'

export interface BooksProps {
    books: Item[]
}

const Books: React.FC<BooksProps> = ({ books }: BooksProps) => {
    return (
        <ul>
            {books.map(book => (
            <li key={book.id}>{book.volumeInfo.title} : {book.volumeInfo.subtitle} - {book.volumeInfo.authors.join(', ')}</li>)
            )}
        </ul>
    )
}

Books.propTypes = {

}

export default Books


