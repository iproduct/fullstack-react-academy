import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './book-models'

interface BookItemProps {
    book: Item;
    onFavourite(add: boolean): any;
}

const BookItem: React.FC<BookItemProps> = ({book, onFavourite}) => {
    return (
        <li>{book.volumeInfo.title} : {book.volumeInfo.subtitle} - {book.volumeInfo.authors.join(', ')}</li>
    )
}

BookItem.propTypes = {
    book: PropTypes.any.isRequired,
    onFavourite: PropTypes.func.isRequired
}

export default BookItem
